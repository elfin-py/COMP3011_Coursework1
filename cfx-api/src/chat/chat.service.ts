import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { requiredEnv } from '../common/config/auth-config';
import { ClimateService } from '../climate/climate.service';
import { RecommendationService } from '../recommendation/recommendation.service';
import { ChatRecommendationDto } from './dto/chat-recommendation.dto';

type ExtractedPrefs = {
  occasion?: string;
  activity?: string;
  styleTags?: string[];
  avoidTags?: string[];
  preferences?: string[];
};

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(
    private readonly recommendationService: RecommendationService,
    private readonly jwtService: JwtService,
    private readonly climateService: ClimateService,
  ) {}

  async recommendFromChat(dto: ChatRecommendationDto, authHeader?: string) {
    const cleanMessage = this.cleanUserMessage(dto.message);
    const cleanContext = this.cleanUserMessage(dto.context || '');
    const combinedMessage = `${cleanContext} ${cleanMessage}`.trim();
    const userId = await this.tryExtractUserId(authHeader);
    const extractedCurrent = await this.extractPreferences(cleanMessage || combinedMessage);
    const extractedContext = combinedMessage && combinedMessage !== cleanMessage
      ? await this.extractPreferences(combinedMessage)
      : extractedCurrent;
    const merged: ExtractedPrefs = {
      occasion: dto.occasion || extractedCurrent.occasion || extractedContext.occasion,
      activity: dto.activity || extractedCurrent.activity || extractedContext.activity,
      styleTags: [
        ...new Set([...(dto.styleTags || []), ...(extractedCurrent.styleTags || []), ...(extractedContext.styleTags || [])]),
      ],
      avoidTags: [
        ...new Set([...(dto.avoidTags || []), ...(extractedCurrent.avoidTags || []), ...(extractedContext.avoidTags || [])]),
      ],
      preferences: extractedCurrent.preferences?.length ? extractedCurrent.preferences : (extractedContext.preferences || []),
    };

    const result = await this.recommendationService.recommendOutfit(
      userId,
      dto.location,
      dto.datetime,
      merged,
    );

    const topItem = result.outfit?.items?.[0]?.item;
    const tags = (topItem?.styleTags || result.outfit?.styleTags || []).slice(
      0,
      4,
    );
    const material = topItem?.material || 'layer-friendly fabric';
    const climate = await this.climateService.latest(
      dto.location,
      dto.datetime,
    );
    const weatherStyle = this.weatherStyleGuidance(
      climate,
      merged,
      cleanMessage,
      cleanContext,
    );
    const narrative = await this.generateAssistantReply(
      dto,
      merged,
      tags,
      material,
      cleanMessage,
      cleanContext,
      weatherStyle,
    );

    return {
      recommendation: result,
      interpretedPreferences: merged,
      message: narrative,
    };
  }

  private cleanUserMessage(message: string) {
    return message
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => {
        const lower = line.toLowerCase();
        return (
          !lower.startsWith('location:') &&
          !lower.startsWith('time:') &&
          !lower.startsWith('conversation:') &&
          !lower.startsWith('user request:') &&
          !lower.startsWith('user:')
        );
      })
      .join(' ')
      .trim();
  }

  private async tryExtractUserId(authHeader?: string): Promise<string | null> {
    const raw = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!raw) return null;
    try {
      const payload = await this.jwtService.verifyAsync(raw, {
        secret: requiredEnv('JWT_ACCESS_SECRET'),
      });
      return payload?.sub || null;
    } catch {
      return null;
    }
  }

  private async extractPreferences(message: string): Promise<ExtractedPrefs> {
    const fallback = this.ruleExtract(message);
    const hfToken = process.env.HF_TOKEN;
    const hfModel =
      process.env.HF_CHAT_MODEL || 'meta-llama/Llama-3.1-8B-Instruct';
    if (!hfToken) return fallback;

    try {
      const prompt = [
        'Extract outfit preferences from this message and return JSON only.',
        'Keys: occasion, activity, styleTags[], avoidTags[], preferences[]',
        'Infer activity carefully: workout/gym/training should never be collapsed into work.',
        'Keep preferences focused on what the user explicitly asked for, not generic style assumptions.',
        `Message: ${message}`,
      ].join('\n');
      const res = await fetch(
        `https://api-inference.huggingface.co/models/${encodeURIComponent(hfModel)}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hfToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 200,
              temperature: 0.2,
              return_full_text: false,
            },
          }),
        },
      );
      if (!res.ok) return fallback;
      const data: any = await res.json();
      const raw = Array.isArray(data)
        ? data[0]?.generated_text || ''
        : data?.generated_text || '';
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (!jsonMatch) return fallback;
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        occasion: parsed?.occasion || fallback.occasion,
        activity: parsed?.activity || fallback.activity,
        styleTags: Array.isArray(parsed?.styleTags)
          ? parsed.styleTags
          : fallback.styleTags,
        avoidTags: Array.isArray(parsed?.avoidTags)
          ? parsed.avoidTags
          : fallback.avoidTags,
        preferences: Array.isArray(parsed?.preferences)
          ? parsed.preferences
          : fallback.preferences,
      };
    } catch (e: any) {
      this.logger.warn(`HF extraction failed: ${e?.message ?? e}`);
      return fallback;
    }
  }

  private ruleExtract(message: string): ExtractedPrefs {
    const txt = message.toLowerCase();
    const hasWord = (pattern: RegExp) => pattern.test(txt);
    const styles = [
      'casual',
      'smart',
      'streetwear',
      'minimal',
      'formal',
      'sporty',
      'puffer',
      'denim',
      'tailored',
      'oversized',
    ];
    const avoidables = ['suede', 'silk', 'airy', 'shorts', 'skirt', 'heels'];
    const activities = [
      { key: 'gym', pattern: /\b(gym|workout|training|exercise|lifting)\b/ },
      { key: 'run', pattern: /\b(run|running|jog|jogging)\b/ },
      { key: 'hike', pattern: /\b(hike|hiking|trail|outdoor)\b/ },
      { key: 'commute', pattern: /\bcommute\b/ },
      { key: 'school', pattern: /\bschool\b/ },
      { key: 'work', pattern: /\b(work|office|meeting)\b/ },
      { key: 'party', pattern: /\bparty\b/ },
    ];
    return {
      occasion: hasWord(/\bformal\b/)
        ? 'formal'
        : hasWord(/\b(dinner|date|party|evening)\b/)
          ? 'evening'
          : hasWord(/\b(work|office|meeting)\b/)
            ? 'work'
            : undefined,
      activity: activities.find((a) => a.pattern.test(txt))?.key,
      styleTags: styles.filter((s) => new RegExp(`\b${s}\b`).test(txt)),
      avoidTags: avoidables.filter(
        (a) => txt.includes(`no ${a}`) || txt.includes(`avoid ${a}`) || txt.includes(`without ${a}`),
      ),
      preferences: txt
        .split(/[.,;!?]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 8)
        .slice(0, 5),
    };
  }

  private buildNarrative(
    dto: ChatRecommendationDto,
    prefs: ExtractedPrefs,
    tags: string[],
    material: string,
    cleanMessage: string,
    cleanContext: string,
    weatherStyle: {
      palette: string;
      patterns: string;
      fabrics: string;
      note: string;
    },
  ) {
    const intentText =
      `${prefs.occasion || ''} ${prefs.activity || ''} ${cleanMessage}`.toLowerCase();
    const styleBits = this.styleDirection(intentText, prefs.styleTags || tags);
    const preferenceHint = prefs.preferences?.length
      ? ` You mentioned ${prefs.preferences.slice(0, 2).join(' and ')}, so I’ve leaned into that.`
      : '';
    const avoidBits = prefs.avoidTags?.length
      ? ` Avoid ${prefs.avoidTags.slice(0, 2).join(' and ')}.`
      : '';
    const eventHint = prefs.occasion || prefs.activity;
    const isWorkoutRequest = /\b(gym|workout|training|exercise|lifting|run|running|jog)\b/.test(intentText);
    const intenseWorkout = /\b(intense|hard|heavy|sweaty|hiit|spin)\b/.test(intentText);
    const noHeels = /(no heels|without heels|don.t want heels|dont want heels)/.test(intentText);
    const wantsStilettos = /(stiletto|stilettos)/.test(intentText);
    const wantsHeels = /(heels|high heels|pumps)/.test(intentText);
    const footwear = noHeels
      ? 'pointed flats or sleek loafers'
      : wantsStilettos
        ? 'stilettos'
        : wantsHeels
          ? 'heels'
          : /\b(dinner|date|party|evening|formal)\b/.test(intentText)
            ? 'kitten heels or elegant flats'
            : /\b(gym|workout|training|run|running)\b/.test(intentText)
              ? 'supportive trainers'
              : 'clean trainers or loafers';
    const tone = isWorkoutRequest || intenseWorkout
      ? 'functional and breathable'
      : wantsStilettos || wantsHeels
        ? 'statement-led'
        : 'easy, polished';
    const opening = eventHint
      ? `For ${eventHint}, I’d keep it ${tone}.`
      : `I’d keep this look ${tone}.`;
    const trainingNote = intenseWorkout
      ? ' Prioritise breathable layers and easy movement rather than anything structured or heavy.'
      : '';
    return (
      `${opening} ` +
      `Use ${styleBits} details, choose ${footwear}, and anchor it with ${isWorkoutRequest ? weatherStyle.fabrics : material || weatherStyle.fabrics}.` +
      ` For colours, try ${weatherStyle.palette}; patterns that work well are ${weatherStyle.patterns}; and fabrics to prioritise are ${weatherStyle.fabrics}.` +
      ` ${weatherStyle.note}${trainingNote}${preferenceHint}${avoidBits}`
    ).replace(/\s+/g, ' ').trim();
  }

  private styleDirection(intentText: string, hintedTags: string[]) {
    if (/\b(dinner|date|party|evening|formal)\b/.test(intentText))
      return 'polished, dressy';
    if (/\b(gym|workout|training|run|running)\b/.test(intentText))
      return 'athleisure, performance';
    if (/\b(work|office|meeting)\b/.test(intentText))
      return 'smart-casual, tailored';
    const cleaned = (hintedTags || [])
      .map((t) => t.toLowerCase())
      .filter((t) => !['puffer', 'casual', 'recycled cotton'].includes(t))
      .slice(0, 2);
    return cleaned.length ? cleaned.join(', ') : 'clean, practical';
  }

  private async generateAssistantReply(
    dto: ChatRecommendationDto,
    prefs: ExtractedPrefs,
    tags: string[],
    material: string,
    cleanMessage: string,
    cleanContext: string,
    weatherStyle: {
      palette: string;
      patterns: string;
      fabrics: string;
      note: string;
    },
  ) {
    const fallback = this.buildNarrative(
      dto,
      prefs,
      tags,
      material,
      cleanMessage,
      cleanContext,
      weatherStyle,
    );
    const hfToken = process.env.HF_TOKEN;
    if (!hfToken) return fallback;

    const hfModel =
      process.env.HF_CHAT_MODEL || 'meta-llama/Llama-3.1-8B-Instruct';
    const prompt = [
      'You are a helpful fashion stylist assistant in a weather-aware outfit app.',
      'Give one concrete outfit suggestion in natural, conversational human language.',
      'Do not output generic defaults; tailor your answer to the event/activity and user message.',
      'Do not start with phrases like "Great choice for" or repeat the same stock opener every time.',
      'If the user has not clearly given an event or activity, do not invent one.',
      'Do NOT use headings like "Outfit:", "Palette:", "Patterns:", "Fabrics:", or "Why this works:".',
      'Write like a stylist chatting to a person.',
      'Mention clothing pieces, colour palette, fabric/material, and footwear.',
      "Explicitly reflect the user's stated activity, intensity, and any things they want to avoid.",
      'If the message implies training or a workout, focus on breathable performance wear, movement, and supportive footwear rather than workwear.',
      'If user says they do not want a certain item (e.g. heels), respect that explicitly.',
      'If relevant, include one optional layer for later weather changes.',
      'Use British spelling. Keep it concise (3-5 sentences). Do not output JSON.',
      `Location: ${dto.location}`,
      `Datetime: ${dto.datetime || 'current local time'}`,
      `Occasion: ${prefs.occasion || 'not specified'}`,
      `Activity: ${prefs.activity || 'not specified'}`,
      `Style tags: ${tags.join(', ') || 'none'}`,
      `Avoid tags: ${(prefs.avoidTags || []).join(', ') || 'none'}`,
      `Preferred material hint: ${material}`,
      `Recommended colour palette: ${weatherStyle.palette}`,
      `Recommended patterns: ${weatherStyle.patterns}`,
      `Recommended fabrics: ${weatherStyle.fabrics}`,
      `Weather note: ${weatherStyle.note}`,
      `Recent context: ${cleanContext || 'none'}`,
      `User message: ${cleanMessage}`,
      'Answer:',
    ].join('\n');

    try {
      const res = await fetch(
        `https://api-inference.huggingface.co/models/${encodeURIComponent(hfModel)}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hfToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 180,
              temperature: 0.55,
              top_p: 0.9,
              return_full_text: false,
            },
          }),
        },
      );
      if (!res.ok) return fallback;
      const data: any = await res.json();
      const raw = Array.isArray(data)
        ? data[0]?.generated_text
        : data?.generated_text;
      const text = typeof raw === 'string' ? raw.trim() : '';
      if (!text) return fallback;
      return text.replace(/^answer:\s*/i, '').trim();
    } catch (e: any) {
      this.logger.warn(`HF reply generation failed: ${e?.message ?? e}`);
      return fallback;
    }
  }

  private weatherStyleGuidance(
    climate: any,
    prefs?: ExtractedPrefs,
    cleanMessage?: string,
    cleanContext?: string,
  ) {
    const temp = Number(climate?.temperatureC ?? 14);
    const precip = Number(climate?.precipProb ?? 0);
    const cold = temp < 10;
    const mild = temp >= 10 && temp < 18;
    const warm = temp >= 18;
    const wet = precip >= 45;
    const showery = precip >= 20 && precip < 45;
    const intentText = `${prefs?.occasion || ''} ${prefs?.activity || ''} ${cleanMessage || ''}`.toLowerCase();
    const isWorkout = /\b(gym|workout|training|exercise|lifting|run|running|jog)\b/.test(intentText);
    const isWork = /\b(work|office|meeting)\b/.test(intentText);
    const isEvening = /\b(dinner|date|party|evening|formal)\b/.test(intentText);

    if (isWorkout) {
      if (cold && wet) {
        return {
          palette: 'charcoal, slate, deep olive',
          patterns: 'clean blocks or minimal tonal panels',
          fabrics: 'technical jersey, moisture-wicking base layers, light weatherproof shell',
          note: 'Keep it breathable and movement-friendly, with one weatherproof layer for the journey in and out.',
        };
      }
      if (cold) {
        return {
          palette: 'graphite, navy, muted green',
          patterns: 'minimal panels or clean solids',
          fabrics: 'technical jersey, brushed performance fabric, breathable base layers',
          note: 'Prioritise warmth at the start, but keep the core outfit breathable enough for an intense session.',
        };
      }
      if (warm || showery) {
        return {
          palette: 'soft neutrals with one sharp sport accent',
          patterns: 'clean solids or subtle athletic paneling',
          fabrics: 'lightweight performance fabric, stretch jersey, breathable mesh layers',
          note: 'Keep everything breathable, flexible, and easy to move in.',
        };
      }
      return {
        palette: 'neutral active tones with one clean accent',
        patterns: 'minimal solids or tonal athletic panels',
        fabrics: 'performance jersey, stretch fabric, breathable technical layers',
        note: 'Aim for comfort, mobility, and sweat-friendly fabrics rather than heavy textures.',
      };
    }

    if (isWork) {
      if (cold && wet) {
        return {
          palette: 'charcoal, navy, deep burgundy',
          patterns: 'subtle checks or clean solids',
          fabrics: 'wool blends, cotton shirting, weather-resistant outer layers',
          note: 'Keep the outfit polished but practical, with one structured outer layer for the weather.',
        };
      }
      if (cold) {
        return {
          palette: 'espresso, camel, forest green',
          patterns: 'herringbone, micro-check, or clean solids',
          fabrics: 'wool, knitwear, cotton shirting',
          note: 'Use structured layering for warmth while keeping the finish office-appropriate.',
        };
      }
      return {
        palette: 'stone, navy, soft blue, cream',
        patterns: 'minimal stripes or tonal textures',
        fabrics: 'cotton poplin, light wool blends, tailored knits',
        note: 'Keep the finish smart and clean, with fabrics that hold shape through the day.',
      };
    }

    if (isEvening) {
      if (cold) {
        return {
          palette: 'black, espresso, burgundy, deep olive',
          patterns: 'solid statements or subtle sheen',
          fabrics: 'crepe, satin accents, fine knits, tailored wool blends',
          note: 'Keep the look elevated and add one refined outer layer for the colder air.',
        };
      }
      return {
        palette: 'black, cream, rich jewel tones',
        patterns: 'clean solids or subtle texture',
        fabrics: 'crepe, satin, draped jersey, lightweight tailoring',
        note: 'Keep the finish elevated, polished, and slightly dressier than daywear.',
      };
    }

    if (cold && wet) {
      return {
        palette: 'charcoal, navy, deep burgundy',
        patterns: 'solid blocks or subtle checks',
        fabrics: 'wool blends, coated cotton, water-resistant outer layers',
        note: 'Keep a waterproof outer layer and avoid delicate fabrics.',
      };
    }
    if (cold) {
      return {
        palette: 'espresso, camel, forest green',
        patterns: 'herringbone, micro-check, or clean solids',
        fabrics: 'wool, knitwear, denim',
        note: 'Use structured layering for warmth and comfort.',
      };
    }
    if (mild && showery) {
      return {
        palette: 'stone, olive, slate blue',
        patterns: 'minimal stripes or tonal textures',
        fabrics: 'cotton twill, light knits, shower-resistant shell',
        note: 'A light rain-ready layer is useful later in the day.',
      };
    }
    if (warm && wet) {
      return {
        palette: 'soft neutrals with one rich accent',
        patterns: 'small prints or clean solids',
        fabrics: 'breathable cotton, linen blends, light technical outer layer',
        note: 'Stay breathable and keep one compact rain layer.',
      };
    }
    if (warm) {
      return {
        palette: 'off-white, sand, sage, soft blue',
        patterns: 'light stripes, tonal sets, or solids',
        fabrics: 'cotton poplin, lightweight denim, linen blends',
        note: 'Keep layers light and airy.',
      };
    }
    return {
      palette: 'neutral base with one accent colour',
      patterns: 'subtle textures or simple stripes',
      fabrics: 'mid-weight cottons and knits',
      note: 'Add or remove one layer through the day.',
    };
  }
}
