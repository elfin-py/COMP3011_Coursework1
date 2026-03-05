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
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let DonationsService = class DonationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async routeItem(itemId) {
        const item = await this.prisma.item.findUnique({
            where: { id: itemId },
            include: { owner: { include: { profile: true } } },
        });
        if (!item)
            throw new common_1.NotFoundException('Item not found');
        if (item.status !== client_1.ItemStatus.AVAILABLE && item.status !== client_1.ItemStatus.RESERVED) {
            throw new common_1.BadRequestException('Item cannot be routed in current status');
        }
        const recyclers = await this.prisma.recycler.findMany({
            where: { materials: { hasSome: [item.material.toLowerCase()] } },
        });
        if (recyclers.length === 0) {
            throw new common_1.BadRequestException('No recycler accepts this material');
        }
        const scored = recyclers.map((rec) => {
            const distanceScore = 1 / (1 + rec.distanceKm);
            const impactScore = rec.co2PerKg;
            const capacityScore = rec.capacityKg > 0 ? 1 : 0;
            const total = 0.4 * impactScore + 0.3 * distanceScore + 0.3 * capacityScore;
            return { rec, total, distanceScore, impactScore, capacityScore };
        });
        scored.sort((a, b) => b.total - a.total);
        const best = scored[0];
        const donation = await this.prisma.donation.create({
            data: {
                itemId: item.id,
                recyclerId: best.rec.id,
                allocatedKg: 1,
                impactEstimate: best.impactScore,
                status: 'ROUTED',
            },
        });
        await this.prisma.recycler.update({
            where: { id: best.rec.id },
            data: { capacityKg: { decrement: 1 } },
        });
        await this.prisma.item.update({
            where: { id: item.id },
            data: { status: client_1.ItemStatus.DONATED },
        });
        return {
            donation,
            rationale: {
                recycler: best.rec.name,
                distanceScore: best.distanceScore,
                impactScore: best.impactScore,
                capacityScore: best.capacityScore,
                total: best.total,
            },
        };
    }
};
exports.DonationsService = DonationsService;
exports.DonationsService = DonationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DonationsService);
//# sourceMappingURL=donations.service.js.map