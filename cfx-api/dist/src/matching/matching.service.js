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
exports.MatchingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const listings_service_1 = require("../listings/listings.service");
let MatchingService = class MatchingService {
    prisma;
    listingsService;
    weights = {
        style: 0.35,
        size: 0.2,
        condition: 0.1,
        distance: 0.15,
        sustain: 0.1,
        demand: 0.1,
    };
    constructor(prisma, listingsService) {
        this.prisma = prisma;
        this.listingsService = listingsService;
    }
    async generateMatches(listingId) {
        const listing = await this.listingsService.findById(listingId);
        const sourceItem = listing.item;
        const sourceOwnerProfile = await this.prisma.profile.findUnique({
            where: { userId: sourceItem.ownerId },
        });
        if (!sourceOwnerProfile)
            throw new common_1.NotFoundException('Source owner profile missing');
        const candidates = await this.prisma.item.findMany({
            where: {
                id: { not: sourceItem.id },
                ownerId: { not: sourceItem.ownerId },
                category: sourceItem.category,
                status: client_1.ItemStatus.AVAILABLE,
            },
            include: { owner: { include: { profile: true } } },
        });
        const demandBalance = await this.computeDemandBalance(sourceItem.category);
        const scored = candidates.map((item) => {
            const breakdown = this.scoreItem(sourceItem, sourceOwnerProfile, item, demandBalance);
            return {
                listingId,
                candidateItemId: item.id,
                score: breakdown.total,
                breakdown,
            };
        });
        scored.sort((a, b) => b.score - a.score);
        return scored;
    }
    scoreItem(sourceItem, sourceProfile, candidate, demandBalance) {
        const style = this.cosine(sourceItem.styleEmbedding, candidate.styleEmbedding);
        const size = this.sizePenalty(sourceItem.sizeLabel, candidate.sizeLabel);
        const condition = Math.min(candidate.condition, 5) / 5;
        const distance = this.inverseDistance(sourceProfile.cityLat, sourceProfile.cityLon, candidate.owner.profile?.cityLat ?? sourceProfile.cityLat, candidate.owner.profile?.cityLon ?? sourceProfile.cityLon);
        const sustain = candidate.material.toLowerCase().includes('organic') ||
            candidate.material.toLowerCase().includes('recycled')
            ? 1
            : 0.4;
        const demand = demandBalance;
        const total = this.weights.style * style +
            this.weights.size * size +
            this.weights.condition * condition +
            this.weights.distance * distance +
            this.weights.sustain * sustain +
            this.weights.demand * demand;
        return { style, size, condition, distance, sustain, demand, total };
    }
    sizePenalty(source, candidate) {
        if (source === candidate)
            return 1;
        const delta = Math.abs((source.charCodeAt(0) || 0) - (candidate.charCodeAt(0) || 0));
        return Math.max(0, 1 - delta * 0.25);
    }
    cosine(a, b) {
        if (!a?.length || !b?.length)
            return 0;
        const len = Math.min(a.length, b.length);
        let dot = 0, na = 0, nb = 0;
        for (let i = 0; i < len; i++) {
            dot += a[i] * b[i];
            na += a[i] * a[i];
            nb += b[i] * b[i];
        }
        const denom = Math.sqrt(na) * Math.sqrt(nb);
        if (denom === 0)
            return 0;
        return dot / denom;
    }
    inverseDistance(lat1, lon1, lat2, lon2) {
        const d = this.haversine(lat1, lon1, lat2, lon2);
        return 1 / (1 + d);
    }
    haversine(lat1, lon1, lat2, lon2) {
        const toRad = (v) => (v * Math.PI) / 180;
        const R = 6371;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) *
                Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    async computeDemandBalance(category) {
        const total = await this.prisma.item.count();
        const inCategory = await this.prisma.item.count({ where: { category } });
        if (total === 0)
            return 0.5;
        const ratio = inCategory / total;
        return Math.max(0, 1 - ratio);
    }
};
exports.MatchingService = MatchingService;
exports.MatchingService = MatchingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        listings_service_1.ListingsService])
], MatchingService);
//# sourceMappingURL=matching.service.js.map