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
exports.RecommendationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const climate_service_1 = require("../climate/climate.service");
const trends_service_1 = require("../trends/trends.service");
const feedback_service_1 = require("../feedback/feedback.service");
let RecommendationService = class RecommendationService {
    prisma;
    climateService;
    trendsService;
    feedbackService;
    constructor(prisma, climateService, trendsService, feedbackService) {
        this.prisma = prisma;
        this.climateService = climateService;
        this.trendsService = trendsService;
        this.feedbackService = feedbackService;
    }
    async recommendOutfit(userId, location, datetime, options) {
        const climate = await this.climateService.latest(location, datetime);
        if (!climate)
            throw new common_1.NotFoundException('No climate snapshot for location');
        const userScopedOutfits = userId
            ? await this.prisma.outfit.findMany({
                where: { userId },
                include: { items: { include: { item: true } } },
                take: 20,
            })
            : [];
        const outfits = userScopedOutfits.length
            ? userScopedOutfits
            : await this.prisma.outfit.findMany({
                include: { items: { include: { item: true } } },
                take: 20,
            });
        if (outfits.length === 0)
            throw new common_1.NotFoundException('No outfits found to score');
        const userPref = userId && userScopedOutfits.length
            ? await this.feedbackService.userAverage(userId)
            : { avg: null, count: 0 };
        const scored = outfits.map((o) => {
            const perItemPromises = o.items.map((oi) => this.scoreItem(oi.item, climate, userPref));
            return { outfit: o, perItemPromises };
        });
        const resolved = await Promise.all(scored.map(async (entry) => {
            const perItem = await Promise.all(entry.perItemPromises);
            const customBoost = this.customPreferenceBoost(entry.outfit, options);
            const total = perItem.reduce((acc, s) => acc + s.total, 0) / (perItem.length || 1) +
                customBoost;
            return {
                outfit: entry.outfit,
                score: { total, items: perItem },
                customBoost,
            };
        }));
        resolved.sort((a, b) => b.score.total - a.score.total);
        return resolved[0];
    }
    customPreferenceBoost(outfit, options) {
        if (!options)
            return 0;
        const tags = (outfit.styleTags || []).map((t) => t.toLowerCase());
        const occasion = (outfit.occasion || '').toLowerCase();
        const wants = (options.styleTags || []).map((t) => t.toLowerCase());
        const avoids = (options.avoidTags || []).map((t) => t.toLowerCase());
        let boost = 0;
        if (options.occasion &&
            occasion &&
            occasion.includes(options.occasion.toLowerCase())) {
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
    async scoreItem(item, climate, userPref) {
        const tempScore = this.tempMatch(item.insulation ?? 0.5, climate.temperatureC);
        const precip = climate.precipProb ?? 0;
        const wind = climate.windKph ?? 0;
        const material = (item.material || '').toLowerCase();
        const tags = item.styleTags ?? [];
        const materialQuality = this.materialQualityBoost(material, climate.temperatureC, precip, wind, item.waterproof ?? 0);
        let precipPenalty = 0;
        if (precip > 40 && (item.waterproof ?? 0) < 0.3)
            precipPenalty += 0.3;
        if (precip > 20 && material.includes('suede'))
            precipPenalty += 0.5;
        let windPenalty = 0;
        if (wind > 25 &&
            tags.some((t) => ['skirt', 'dress'].includes(t.toLowerCase()))) {
            windPenalty += 0.3;
        }
        let coldPenalty = 0;
        if (climate.temperatureC < 8 && (item.insulation ?? 0) < 0.4) {
            coldPenalty += 0.2;
        }
        const trendBoost = await this.trendBoost(tags, material);
        const protection = Math.min(1, (item.waterproof ?? 0) + (material.includes('waterproof') ? 0.2 : 0));
        const userBoost = userPref.avg && userPref.avg > 3
            ? Math.min(0.1, (userPref.avg - 3) * 0.03)
            : 0;
        const total = 0.45 * tempScore +
            0.25 * (1 - precipPenalty) +
            0.15 * (1 - windPenalty) +
            0.1 * protection +
            0.15 * trendBoost +
            materialQuality +
            userBoost -
            coldPenalty;
        return {
            itemId: item.id,
            tempScore,
            precipPenalty,
            windPenalty,
            protection,
            trendBoost,
            materialQuality,
            userBoost,
            total,
        };
    }
    materialQualityBoost(material, temperatureC, precip, wind, waterproof) {
        let boost = 0;
        if (/(wool|merino|cashmere|cotton|linen|denim|leather|silk)/.test(material)) {
            boost += 0.05;
        }
        if (/(recycled cotton|organic cotton|wool blend|linen blend)/.test(material)) {
            boost += 0.02;
        }
        const technicalWeather = precip > 35 || wind > 28 || waterproof >= 0.45;
        if (/polyester/.test(material)) {
            boost += technicalWeather ? -0.01 : -0.06;
        }
        if (/(nylon|shell|technical)/.test(material)) {
            boost += technicalWeather ? 0.03 : -0.02;
        }
        if (/acrylic/.test(material)) {
            boost -= 0.04;
        }
        if (temperatureC > 20 && /polyester/.test(material) && waterproof < 0.35) {
            boost -= 0.03;
        }
        return Math.max(-0.08, Math.min(0.08, boost));
    }
    async trendBoost(tags, material) {
        const recentNews = await this.trendsService.topTagsRecent('news-rss', 120, 60);
        const trends = recentNews.length
            ? recentNews
            : await this.trendsService.topTags('', 60);
        const byTag = new Map();
        for (const t of trends) {
            byTag.set(t.tag.toLowerCase(), {
                volume: t.volume,
                sentiment: t.sentiment ?? 0,
            });
        }
        const candidateTags = new Set([
            ...tags.map((t) => t.toLowerCase()),
            ...Array.from(byTag.keys()).filter((k) => material.includes(k)),
        ]);
        let best = 0;
        for (const key of candidateTags) {
            const stat = byTag.get(key);
            if (!stat)
                continue;
            const volumeWeight = Math.min(0.35, Math.log10(stat.volume + 1) / 4);
            const sentimentWeight = Math.max(-0.55, Math.min(0.55, stat.sentiment * 0.55));
            const score = volumeWeight + sentimentWeight;
            if (Math.abs(score) > Math.abs(best))
                best = score;
        }
        return Math.max(-0.6, Math.min(0.8, best));
    }
    tempMatch(insulation, temperatureC) {
        const target = 18 - insulation * 10;
        const diff = Math.abs(temperatureC - target);
        return Math.max(0, 1 - diff / 20);
    }
};
exports.RecommendationService = RecommendationService;
exports.RecommendationService = RecommendationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        climate_service_1.ClimateService,
        trends_service_1.TrendsService,
        feedback_service_1.FeedbackService])
], RecommendationService);
//# sourceMappingURL=recommendation.service.js.map