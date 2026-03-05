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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let ItemsService = class ItemsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(ownerId, dto) {
        return this.prisma.item.create({
            data: {
                ownerId,
                category: dto.category,
                sizeLabel: dto.sizeLabel,
                material: dto.material,
                condition: dto.condition,
                styleEmbedding: dto.styleEmbedding,
                photos: (dto.photos ?? {}),
                insulation: dto.insulation ?? 0.5,
                waterproof: dto.waterproof ?? 0.0,
                styleTags: dto.styleTags ?? [],
                status: client_1.ItemStatus.AVAILABLE,
            },
        });
    }
    findAll(ownerId) {
        return this.prisma.item.findMany({
            where: { ownerId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(ownerId, id) {
        const item = await this.prisma.item.findUnique({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException('Item not found');
        if (item.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You can only view your own items');
        }
        return item;
    }
    async update(ownerId, id, dto) {
        const existing = await this.prisma.item.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Item not found');
        if (existing.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You can only update your own items');
        }
        return this.prisma.item.update({
            where: { id },
            data: {
                category: dto.category,
                sizeLabel: dto.sizeLabel,
                material: dto.material,
                condition: dto.condition,
                styleEmbedding: dto.styleEmbedding,
                photos: dto.photos,
                insulation: dto.insulation,
                waterproof: dto.waterproof,
                styleTags: dto.styleTags,
                status: dto.status,
            },
        });
    }
    async remove(ownerId, id) {
        const existing = await this.prisma.item.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Item not found');
        if (existing.ownerId !== ownerId) {
            throw new common_1.ForbiddenException('You can only delete your own items');
        }
        await this.prisma.item.delete({ where: { id } });
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItemsService);
//# sourceMappingURL=items.service.js.map