"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const node_cron_1 = __importDefault(require("node-cron"));
const fs_1 = require("fs");
const path = __importStar(require("path"));
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
function textFromXml(xmlText) {
    return xmlText
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
}
function parseDate(raw) {
    if (!raw)
        return null;
    const date = new Date(raw.trim());
    return Number.isNaN(date.getTime()) ? null : date;
}
function parseArticlesFromFeed(feedXml) {
    const blocks = feedXml.match(/<item\b[\s\S]*?<\/item>/gi) ||
        feedXml.match(/<entry\b[\s\S]*?<\/entry>/gi) ||
        [];
    return blocks
        .map((block) => {
        const title = textFromXml(block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
        const description = textFromXml(block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] ||
            block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)?.[1] ||
            block.match(/<content[^>]*>([\s\S]*?)<\/content>/i)?.[1] ||
            '');
        const publishedAt = parseDate(block.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)?.[1] ||
            block.match(/<published[^>]*>([\s\S]*?)<\/published>/i)?.[1] ||
            block.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i)?.[1]);
        return { title, description, publishedAt };
    })
        .filter((a) => !!a.title);
}
function sentimentScore(text) {
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
    if (posHits === 0 && negHits === 0)
        return 0;
    return (posHits - negHits) / (posHits + negHits);
}
function countKeywords(articles) {
    const stats = {};
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
async function fetchArticles() {
    const articles = [];
    for (const url of SOURCES) {
        try {
            const res = await fetch(url, { method: 'GET' });
            if (!res.ok)
                continue;
            const text = await res.text();
            const parsedArticles = parseArticlesFromFeed(text);
            for (const article of parsedArticles) {
                const lower = article.title.toLowerCase();
                if (article.title &&
                    !lower.includes('rss') &&
                    !lower.includes('feed') &&
                    !lower.startsWith('copyright')) {
                    articles.push(article);
                }
            }
        }
        catch {
        }
    }
    return articles;
}
async function ingestOnce(platform = 'news-rss') {
    const connectionString = process.env.DATABASE_URL ||
        'postgresql://cfx:cfxpass@localhost:5432/cfx?schema=public';
    const pool = new pg_1.Pool({ connectionString });
    const adapter = new adapter_pg_1.PrismaPg(pool);
    const prisma = new client_1.PrismaClient({ adapter });
    const articles = await fetchArticles();
    if (articles.length === 0) {
        console.warn('No articles fetched; skipping ingest');
        await prisma.$disconnect();
        return;
    }
    const stats = countKeywords(articles);
    const capturedAt = new Date();
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
    try {
        const raw = JSON.parse((0, fs_1.readFileSync)(path.join(__dirname, '..', 'data', 'trends.json'), 'utf-8'));
        const fallbackPlatform = 'news-fallback';
        await prisma.socialTrend.deleteMany({ where: { platform: fallbackPlatform } });
        await prisma.socialTrend.createMany({
            data: raw.tags.map((t) => ({
                platform: fallbackPlatform,
                tag: t.tag,
                volume: t.volume,
                capturedAt,
            })),
        });
        console.warn('No RSS hits; seeded fallback trends from data/trends.json');
    }
    catch (e) {
        console.warn('No RSS hits and fallback load failed:', e);
    }
    await prisma.$disconnect();
}
if (require.main === module) {
    ingestOnce().catch((e) => {
        console.error(e);
        process.exit(1);
    });
}
node_cron_1.default.schedule('0 */6 * * *', () => {
    ingestOnce().catch((e) => console.error(e));
});
//# sourceMappingURL=fetch-news-trends.js.map