import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClimateService } from '../climate/climate.service';
import { TrendsService } from '../trends/trends.service';
import { FeedbackService } from '../feedback/feedback.service';

type RecommendOptions = {
  occasion?: string;
  activity?: string;
  styleTags?: string[];
  avoidTags?: string[];
  preferences?: string[];
};

@Injectable()
export class RecommendationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly climateService: ClimateService,
    private readonly trendsService: TrendsService,
    private readonly feedbackService: FeedbackService,
  ) {}

  async recommendOutfit(
    userId: string | null,
    location: string,
    datetime?: string,
    options?: RecommendOptions,
  ) {
    const climate = await this.climateService.latest(location, datetime);
    if (!climate)
      throw new NotFoundException('No climate snapshot for location');

    const outfits = await this.prisma.outfit.findMany({
      where: userId ? { userId } : undefined,
      include: { items: { include: { item: true } } },
      take: 20,
    });
    if (outfits.length === 0)
      throw new NotFoundException('No outfits found to score');

    const userPref = userId
      ? await this.feedbackService.userAverage(userId)
      : { avg: null, count: 0 };

    const scored = outfits.map((o) => {
      const perItemPromises = o.items.map((oi) =>
        this.scoreItem(oi.item, climate, userPref),
      );
      return { outfit: o, perItemPromises };
    });

    const resolved = await Promise.all(
      scored.map(async (entry) => {
        const perItem = await Promise.all(entry.perItemPromises);
        const customBoost = this.customPreferenceBoost(entry.outfit, options);
        const total =
          perItem.reduce((acc, s) => acc + s.total, 0) / (perItem.length || 1) +
          customBoost;
        return {
          outfit: entry.outfit,
          score: { total, items: perItem },
          customBoost,
        };
      }),
    );

    resolved.sort((a, b) => b.score.total - a.score.total);
    return resolved[0];
  }

  private customPreferenceBoost(outfit: any, options?: RecommendOptions) {
    if (!options) return 0;
    const tags = ((outfit.styleTags || []) as string[]).map((t) =>
      t.toLowerCase(),
    );
    const occasion = (outfit.occasion || '').toLowerCase();
    const wants = (options.styleTags || []).map((t) => t.toLowerCase());
    const avoids = (options.avoidTags || []).map((t) => t.toLowerCase());

    let boost = 0;
    if (
      options.occasion &&
      occasion &&
      occasion.includes(options.occasion.toLowerCase())
    ) {
      boost += 0.08;
    }
    if (wants.length) {
      const matches = wants.filter((w) => tags.includes(w)).length;
      boost += Math.min(0.12, matches * 0.04);
    }
    if (avoids.length) {
      const penalties = avoids.filter((a) => tags.includes(a)).length;
      boost -= Math.min(0.15, penalties * 0.05);
    }
    if (options.activity && tags.includes(options.activity.toLowerCase())) {
      boost += 0.05;
    }
    return boost;
  }

  private async scoreItem(
    item: any,
    climate: any,
    userPref: { avg: number | null; count: number },
  ) {
    const tempScore = this.tempMatch(
      item.insulation ?? 0.5,
      climate.temperatureC,
    );
    const precip = climate.precipProb ?? 0;
    const wind = climate.windKph ?? 0;
    const material = (item.material || '').toLowerCase();
    const tags: string[] = item.styleTags ?? [];

    // penalties
    let precipPenalty = 0;
    if (precip > 40 && (item.waterproof ?? 0) < 0.3) precipPenalty += 0.3;
    if (precip > 20 && material.includes('suede')) precipPenalty += 0.5;

    let windPenalty = 0;
    if (
      wind > 25 &&
      tags.some((t) => ['skirt', 'dress'].includes(t.toLowerCase()))
    ) {
      windPenalty += 0.3;
    }

    let coldPenalty = 0;
    if (climate.temperatureC < 8 && (item.insulation ?? 0) < 0.4) {
      coldPenalty += 0.2;
    }

    // trend boost: if item tags intersect with top tags
    const trendBoost = await this.trendBoost(tags, material);

    const protection = Math.min(
      1,
      (item.waterproof ?? 0) + (material.includes('waterproof') ? 0.2 : 0),
    );

    // simple user-adaptive boost: if user avg rating >3, give slight lift
    const userBoost =
      userPref.avg && userPref.avg > 3
        ? Math.min(0.1, (userPref.avg - 3) * 0.03)
        : 0;

    const total =
      0.45 * tempScore +
      0.25 * (1 - precipPenalty) +
      0.15 * (1 - windPenalty) +
      0.1 * protection +
      0.15 * trendBoost +
      userBoost -
      coldPenalty;

    return {
      itemId: item.id,
      tempScore,
      precipPenalty,
      windPenalty,
      protection,
      trendBoost,
      userBoost,
      total,
    };
  }

  private async trendBoost(tags: string[], material: string) {
    const recentNews = await this.trendsService.topTagsRecent(
      'news-rss',
      120,
      60,
    );
    const trends = recentNews.length
      ? recentNews
      : await this.trendsService.topTags('', 60);

    const byTag = new Map<string, { volume: number; sentiment: number }>();
    for (const t of trends) {
      byTag.set(t.tag.toLowerCase(), {
        volume: t.volume,
        sentiment: t.sentiment ?? 0,
      });
    }

    const candidateTags = new Set<string>([
      ...tags.map((t) => t.toLowerCase()),
      ...Array.from(byTag.keys()).filter((k) => material.includes(k)),
    ]);

    let best = 0;
    for (const key of candidateTags) {
      const stat = byTag.get(key);
      if (!stat) continue;
      const volumeWeight = Math.min(0.35, Math.log10(stat.volume + 1) / 4);
      const sentimentWeight = Math.max(
        -0.55,
        Math.min(0.55, stat.sentiment * 0.55),
      );
      const score = volumeWeight + sentimentWeight;
      if (Math.abs(score) > Math.abs(best)) best = score;
    }

    // Negative means magazines recently frame this trend poorly.
    return Math.max(-0.6, Math.min(0.8, best));
  }

  private tempMatch(insulation: number, temperatureC: number) {
    // crude model: target comfort temp decreases as insulation rises
    const target = 18 - insulation * 10; // e.g., insulation 0.5 -> target 13C
    const diff = Math.abs(temperatureC - target);
    return Math.max(0, 1 - diff / 20);
  }
}
