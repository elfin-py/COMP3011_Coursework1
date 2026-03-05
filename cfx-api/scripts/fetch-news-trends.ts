import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import cron from 'node-cron';
import { readFileSync } from 'fs';
import * as path from 'path';

type Article = {
  title: string;
  description: string;
  publishedAt: Date | null;
};

const SOURCES = [
  'https://www.vogue.com/fashion/rss',
  'https://www.elle.com/rss/fashion.xml',
  'https://fashionista.com/.rss/full/',
  'https://wwd.com/fashion-news/feed/',
  'https://www.harpersbazaar.com/rss/all.xml',
  'https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml',
  'https://www.theguardian.com/fashion/rss',
  'https://www.gq.com/feed/fashion/rss',
  'https://www.refinery29.com/rss.xml',
];

const KEYWORDS = [
  // outerwear & silhouettes
  'puffer',
  'trench',
  'blazer',
  'bomber',
  'quilted jacket',
  'barn jacket',
  'car coat',
  'pea coat',
  'duffle coat',
  'shearling coat',
  'longline coat',
  'double breasted coat',
  'biker jacket',
  'cropped jacket',
  'boxy jacket',
  'utility jacket',
  'oversized coat',
  'cape',
  'windbreaker',
  'anorak',
  'raincoat',
  'mac coat',
  'sherpa jacket',

  // bottoms & utility
  'cargo',
  'parachute pant',
  'wide leg',
  'wide leg jean',
  'straight leg jean',
  'barrel leg',
  'tailored trouser',
  'flare',
  'pleated trouser',
  'denim',
  'double denim',
  'denim maxi',
  'denim skirt',
  'micro short',
  'bermuda short',
  'athleisure',
  'jogger',

  // dresses & skirts
  'mini dress',
  'mini skirt',
  'midi dress',
  'midi skirt',
  'maxi dress',
  'slip dress',
  'sheer dress',
  'mesh dress',
  'column dress',
  'halter dress',
  'wrap dress',
  'drop waist',
  'bias cut',
  'bubble hem',
  'tennis skirt',
  'pleated skirt',

  // tops & layers
  'tank top',
  'tube top',
  'bandeau',
  'corset top',
  'button down',
  'cardigan',
  'polo knit',
  'waistcoat',
  'vest top',
  'long sleeve tee',
  'graphic tee',
  'hoodie',
  'sweatshirt',
  'mock neck',
  'turtleneck',
  'mesh top',
  'sheer top',
  'polo',

  // materials & textures
  'suede',
  'leather',
  'vegan leather',
  'faux leather',
  'denim',
  'tweed',
  'bouclé',
  'fringe',
  'crochet',
  'lace',
  'satin',
  'silk',
  'organza',
  'chiffon',
  'knit',
  'ribbed knit',
  'mesh',
  'tulle',
  'cashmere',
  'corduroy',
  'linen',
  'wool',
  'suiting wool',
  'nylon',
  'fleece',
  'sherpa',
  'velvet',
  'sequin',
  'patent leather',
  'raffia',

  // colors / palettes
  'tomato red',
  'tangerine',
  'copper',
  'burnt orange',
  'lime',
  'chartreuse',
  'olive',
  'emerald',
  'forest green',
  'cerulean',
  'capri blue',
  'navy',
  'ultramarine',
  'fuchsia',
  'magenta',
  'orchid',
  'lavender',
  'lilac',
  'pastel yellow',
  'butter yellow',
  'cloud dancer',
  'off white',
  'bone',
  'chocolate brown',
  'espresso',
  'sand',
  'taupe',
  'burgundy',
  'oxblood',
  'mocha',
  'camel',
  'charcoal',
  'ice blue',
  'powder pink',
  'sage',
  'burgundy red',
  'metallic',
  'silver',
  'chrome',
  'gold',

  // shoes & accessories
  'ballet flat',
  'mary jane',
  'platform sandal',
  'knee high boot',
  'cowboy boot',
  'chelsea boot',
  'combat boot',
  'loafers',
  'penny loafer',
  'kitten heel',
  'slingback',
  'mule',
  'ankle boot',
  'court shoe',
  'boat shoe',
  'sneaker',
  'chunky sneaker',
  'retro sneaker',
  'mesh shoe',
  'transparent heel',
  'bucket hat',
  'baseball cap',
  'beanie',
  'balaclava',
  'beret',
  'headband',
  'hair bow',
  'statement earring',
  'hoop earring',
  'stacked necklace',
  'chain belt',
  'crossbody bag',
  'hobo bag',
  'east west bag',
  'statement belt',
  'oversized tote',
  'micro bag',

  // styling trends
  'quiet luxury',
  'color blocking',
  'monochrome look',
  'co ord set',
  'matching set',
  'deconstructed',
  'asymmetrical',
  'cut out',
  'low rise',
  'high rise',
  'sheer',
  'layering',
  'preppy',
  'streetwear',
  'y2k',
  'gorpcore',
  'balletcore',
  'blokecore',
  'coastal grandma',
  'mob wife aesthetic',
  'old money',
  'quiet outdoors',
  'scandi style',
  'minimalist style',
  'maximalist style',
  'boho',
  'bohemian',
  'western',
  'cowgirl',
  'sports luxe',
  'workwear',
  'office core',
  'quiet luxury look',
  'runway',
  'trend',
  'street style',
  'capsule wardrobe',
  'wardrobe essentials',
  'transitional dressing',
  'weatherproof',
  'waterproof outerwear',
  'layered look',
  'airport outfit',
  'date night look',
  'holiday dressing'
];

function textFromXml(xmlText: string) {
  return xmlText
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseDate(raw?: string) {
  if (!raw) return null;
  const date = new Date(raw.trim());
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseArticlesFromFeed(feedXml: string): Article[] {
  const blocks =
    feedXml.match(/<item\b[\s\S]*?<\/item>/gi) ||
    feedXml.match(/<entry\b[\s\S]*?<\/entry>/gi) ||
    [];
  return blocks
    .map((block) => {
      const title = textFromXml(block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
      const description = textFromXml(
        block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] ||
          block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)?.[1] ||
          block.match(/<content[^>]*>([\s\S]*?)<\/content>/i)?.[1] ||
          '',
      );
      const publishedAt = parseDate(
        block.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)?.[1] ||
          block.match(/<published[^>]*>([\s\S]*?)<\/published>/i)?.[1] ||
          block.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i)?.[1],
      );
      return { title, description, publishedAt };
    })
    .filter((a) => !!a.title);
}

function sentimentScore(text: string) {
  const positive = [
    'love',
    'favorite',
    'best',
    'chic',
    'must-have',
    'stunning',
    'fresh',
    'elevated',
    'sleek',
    'polished',
    'luxury',
    'iconic',
  ];
  const negative = [
    'dated',
    'boring',
    'over',
    'problematic',
    'bad',
    'flop',
    'avoid',
    'cheap-looking',
    'ill-fitting',
    'unflattering',
  ];
  const lower = text.toLowerCase();
  const posHits = positive.filter((p) => lower.includes(p)).length;
  const negHits = negative.filter((n) => lower.includes(n)).length;
  if (posHits === 0 && negHits === 0) return 0;
  return (posHits - negHits) / (posHits + negHits);
}

function countKeywords(articles: Article[]) {
  type Stat = { volume: number; sentimentSum: number };
  const stats: Record<string, Stat> = {};
  const since = new Date();
  since.setDate(since.getDate() - 60);
  const recentArticles = articles.filter((a) => !a.publishedAt || a.publishedAt >= since);

  for (const kw of KEYWORDS) {
    const k = kw.toLowerCase();
    let volume = 0;
    let sentimentSum = 0;
    for (const article of recentArticles) {
      const text = `${article.title} ${article.description}`.toLowerCase();
      if (text.includes(k)) {
        volume += 1;
        sentimentSum += sentimentScore(text);
      }
    }
    stats[kw] = { volume, sentimentSum };
  }
  return stats;
}

async function fetchArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  for (const url of SOURCES) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (!res.ok) continue;
      const text = await res.text();
      const parsedArticles = parseArticlesFromFeed(text);
      for (const article of parsedArticles) {
        const lower = article.title.toLowerCase();
        if (
          article.title &&
          !lower.includes('rss') &&
          !lower.includes('feed') &&
          !lower.startsWith('copyright')
        ) {
          articles.push(article);
        }
      }
    } catch {
      // ignore failures
    }
  }
  return articles;
}

async function ingestOnce(platform = 'news-rss') {
  const connectionString =
    process.env.DATABASE_URL ||
    'postgresql://cfx:cfxpass@localhost:5432/cfx?schema=public';
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const articles = await fetchArticles();
  if (articles.length === 0) {
    console.warn('No articles fetched; skipping ingest');
    await prisma.$disconnect();
    return;
  }
  const stats = countKeywords(articles);
  const capturedAt = new Date();

  // clear previous for this platform to keep it small
  await prisma.socialTrend.deleteMany({ where: { platform } });
  const data = Object.entries(stats)
    .filter(([, stat]) => stat.volume > 0)
    .map(([tag, stat]) => ({
      platform,
      tag,
      volume: stat.volume,
      sentiment: Number((stat.sentimentSum / Math.max(stat.volume, 1)).toFixed(3)),
      capturedAt,
    }));

  if (data.length > 0) {
    await prisma.socialTrend.createMany({ data });
    console.log(`Ingested ${data.length} trend tags from news RSS (last 60 days)`);
    await prisma.$disconnect();
    return;
  }

  // Fallback: reuse synthetic trends if RSS yields nothing (e.g., network blocked)
  try {
    const raw = JSON.parse(
      readFileSync(path.join(__dirname, '..', 'data', 'trends.json'), 'utf-8'),
    );
    const fallbackPlatform = 'news-fallback';
    await prisma.socialTrend.deleteMany({ where: { platform: fallbackPlatform } });
    await prisma.socialTrend.createMany({
      data: raw.tags.map((t: any) => ({
        platform: fallbackPlatform,
        tag: t.tag,
        volume: t.volume,
        capturedAt,
      })),
    });
    console.warn('No RSS hits; seeded fallback trends from data/trends.json');
  } catch (e) {
    console.warn('No RSS hits and fallback load failed:', e);
  }

  await prisma.$disconnect();
}

// Run once when invoked directly
if (require.main === module) {
  ingestOnce().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

// Scheduled every 6 hours if kept running via ts-node
cron.schedule('0 */6 * * *', () => {
  ingestOnce().catch((e) => console.error(e));
});
