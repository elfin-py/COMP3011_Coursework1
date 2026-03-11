"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pinterest_scraper_1 = require("./pinterest.scraper");
let TrendsService = class TrendsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    topTags(platform, limit = 20) {
        return this.prisma.socialTrend.findMany({
            where: platform ? { platform } : {},
            orderBy: { volume: 'desc' },
            take: limit,
        });
    }
    topTagsRecent(platform = '', limit = 50, days = 60) {
        const since = new Date();
        since.setDate(since.getDate() - days);
        return this.prisma.socialTrend.findMany({
            where: {
                ...(platform ? { platform } : {}),
                capturedAt: { gte: since },
            },
            orderBy: [{ volume: 'desc' }, { capturedAt: 'desc' }],
            take: limit,
        });
    }
    materialPopularity() {
        return this.prisma.trendSignal.findMany({
            orderBy: { capturedAt: 'desc' },
            take: 5,
            select: { season: true, materialPopularity: true, capturedAt: true },
        });
    }
    async fetchPinterestImages(query) {
        try {
            const live = await (0, pinterest_scraper_1.scrapePinterestImages)(query, 6);
            if (live.length) {
                return live.map((url) => ({ url, source: 'pinterest-scrape', query }));
            }
        }
        catch (e) {
        }
        const apiUrl = `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/pins/?q=${encodeURIComponent(query)}&data=%7B%22options%22%3A%7B%22query%22%3A%22${encodeURIComponent(query)}%22%2C%22scope%22%3A%22pins%22%2C%22page_size%22%3A20%7D%2C%22context%22%3A%7B%7D%7D&_=${Date.now()}`;
        try {
            const res = await fetch(apiUrl, {
                cache: 'no-store',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    Pragma: 'no-cache',
                    'Cache-Control': 'no-cache',
                },
            });
            if (!res.ok) {
                return [];
            }
            const text = await res.text();
            let json;
            try {
                json = JSON.parse(text);
            }
            catch {
                return [];
            }
            const results = json?.resource_response?.data?.results ?? [];
            const images = results
                .map((r) => r?.images?.orig?.url)
                .filter((u) => !!u && /\.(jpe?g|png|webp)$/i.test(u));
            const unique = Array.from(new Set(images)).slice(0, 10);
            if (unique.length) {
                return unique.map((url) => ({ url, source: 'pinterest', query }));
            }
            return [];
        }
        catch {
            return [];
        }
    }
    async fetchGoogleImages(query) {
        const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'text/html',
            },
        });
        const html = await res.text();
        const matches = Array.from(html.matchAll(/\"ou\":\"(https?:[^\"\\s]+)\"/g)).map((m) => m[1]);
        const unique = Array.from(new Set(matches)).slice(0, 10);
        return unique.map((url) => ({ url, source: 'google', query }));
    }
};
exports.TrendsService = TrendsService;
exports.TrendsService = TrendsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrendsService);
//# sourceMappingURL=trends.service.js.map