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
exports.OutfitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const climate_service_1 = require("../climate/climate.service");
let OutfitsService = class OutfitsService {
    prisma;
    climateService;
    constructor(prisma, climateService) {
        this.prisma = prisma;
        this.climateService = climateService;
    }
    imageKey(url) {
        try {
            const parsed = new URL(url);
            const parts = parsed.pathname
                .toLowerCase()
                .split('/')
                .filter(Boolean)
                .filter((part) => !/^\d+x$/.test(part) && part !== 'originals' && part !== 'original');
            const tail = parts.slice(-4);
            return tail
                .join('/')
                .replace(/[-_][a-z0-9]{6,}(?=\.)/g, '')
                .replace(/(crop|rs|fit|smart)[-_]?[a-z0-9-]*/g, '');
        }
        catch {
            return url.split('?')[0].toLowerCase();
        }
    }
    dedupeImageUrls(urls) {
        const seen = new Set();
        const deduped = [];
        for (const url of urls || []) {
            if (!url)
                continue;
            const key = this.imageKey(url);
            if (!key || seen.has(key))
                continue;
            seen.add(key);
            deduped.push(url);
            if (deduped.length >= 2)
                break;
        }
        return deduped;
    }
    sanitiseOutfitSnapshot(snapshot) {
        if (!snapshot || typeof snapshot !== 'object')
            return snapshot;
        return {
            ...snapshot,
            imageUrls: this.dedupeImageUrls(snapshot.imageUrls),
        };
    }
    async create(userId, dto) {
        const itemIds = dto.itemIds ?? [];
        if (itemIds.length > 0) {
            const items = await this.prisma.item.findMany({
                where: { id: { in: itemIds }, ownerId: userId },
            });
            if (items.length !== itemIds.length) {
                throw new common_1.NotFoundException('One or more items not found or not owned by user');
            }
        }
        return this.prisma.outfit.create({
            data: {
                userId,
                name: dto.name,
                occasion: dto.occasion,
                styleTags: dto.styleTags ?? [],
                ...(itemIds.length
                    ? {
                        items: {
                            createMany: {
                                data: itemIds.map((id) => ({ itemId: id })),
                            },
                        },
                    }
                    : {}),
            },
            include: { items: { include: { item: true } } },
        });
    }
    findAll(userId) {
        return this.prisma.outfit.findMany({
            where: { userId },
            include: { items: { include: { item: true } } },
        });
    }
    async getSavedRecommendations(userId) {
        const saved = await this.prisma.savedRecommendation.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 20,
        });
        return saved.map((entry) => ({
            ...entry,
            outfitSnapshot: this.sanitiseOutfitSnapshot(entry.outfitSnapshot),
        }));
    }
    async toggleSavedRecommendation(userId, dto) {
        const outfitId = dto.outfit.id ?? null;
        const recommendedFor = new Date(dto.recommendedFor);
        const existing = await this.prisma.savedRecommendation.findFirst({
            where: {
                userId,
                outfitId,
                location: dto.location,
                recommendedFor,
            },
        });
        if (existing) {
            await this.prisma.savedRecommendation.delete({
                where: { id: existing.id },
            });
            return { saved: false, id: existing.id };
        }
        const savedCount = await this.prisma.savedRecommendation.count({
            where: { userId },
        });
        if (savedCount >= 20) {
            throw new common_1.BadRequestException('You can save up to 20 recommendations at a time');
        }
        const sanitisedOutfit = {
            ...dto.outfit,
            imageUrls: this.dedupeImageUrls(dto.outfit.imageUrls),
        };
        const created = await this.prisma.savedRecommendation.create({
            data: {
                userId,
                outfitId,
                outfitName: dto.outfit.name,
                location: dto.location,
                recommendedFor,
                weatherSummary: dto.weather,
                outfitSnapshot: sanitisedOutfit,
            },
        });
        return { saved: true, id: created.id };
    }
    async logUsage(userId, outfitId, dto) {
        const outfit = await this.prisma.outfit.findUnique({
            where: { id: outfitId },
        });
        if (!outfit || outfit.userId !== userId) {
            throw new common_1.NotFoundException('Outfit not found for user');
        }
        const climate = await this.climateService.latest(dto.location, dto.usedAt);
        return this.prisma.outfitUsage.create({
            data: {
                outfitId,
                userId,
                location: dto.location,
                usedAt: new Date(dto.usedAt),
                temperatureC: climate?.temperatureC,
                precipProb: climate?.precipProb,
                windKph: climate?.windKph,
                climateSnapshotId: climate?.id,
            },
        });
    }
};
exports.OutfitsService = OutfitsService;
exports.OutfitsService = OutfitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        climate_service_1.ClimateService])
], OutfitsService);
//# sourceMappingURL=outfits.service.js.map