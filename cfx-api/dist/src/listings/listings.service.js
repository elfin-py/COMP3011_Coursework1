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
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let ListingsService = class ListingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, dto) {
        const item = await this.prisma.item.findUnique({
            where: { id: dto.itemId },
        });
        if (!item)
            throw new common_1.NotFoundException('Item not found');
        if (item.ownerId !== ownerId)
            throw new common_1.BadRequestException('Cannot list an item you do not own');
        if (item.status !== client_1.ItemStatus.AVAILABLE)
            throw new common_1.BadRequestException('Item is not available');
        const listing = await this.prisma.listing.create({
            data: {
                itemId: item.id,
                intent: dto.intent,
                availabilityStart: dto.availabilityStart
                    ? new Date(dto.availabilityStart)
                    : null,
                availabilityEnd: dto.availabilityEnd
                    ? new Date(dto.availabilityEnd)
                    : null,
                rentalTerms: (dto.rentalTerms ?? {}),
            },
            include: { item: true },
        });
        await this.prisma.item.update({
            where: { id: item.id },
            data: { status: client_1.ItemStatus.RESERVED },
        });
        return listing;
    }
    async update(ownerId, id, dto) {
        const listing = await this.prisma.listing.findUnique({
            where: { id },
            include: { item: true },
        });
        if (!listing)
            throw new common_1.NotFoundException('Listing not found');
        if (listing.item.ownerId !== ownerId) {
            throw new common_1.BadRequestException('Cannot update a listing you do not own');
        }
        if (dto.itemId && dto.itemId !== listing.itemId) {
            throw new common_1.BadRequestException('Cannot change the item attached to a listing');
        }
        return this.prisma.listing.update({
            where: { id },
            data: {
                intent: dto.intent,
                availabilityStart: dto.availabilityStart !== undefined
                    ? dto.availabilityStart
                        ? new Date(dto.availabilityStart)
                        : null
                    : undefined,
                availabilityEnd: dto.availabilityEnd !== undefined
                    ? dto.availabilityEnd
                        ? new Date(dto.availabilityEnd)
                        : null
                    : undefined,
                rentalTerms: dto.rentalTerms !== undefined
                    ? (dto.rentalTerms ?? {})
                    : undefined,
            },
            include: { item: true },
        });
    }
    async remove(ownerId, id) {
        const listing = await this.prisma.listing.findUnique({
            where: { id },
            include: { item: true },
        });
        if (!listing)
            throw new common_1.NotFoundException('Listing not found');
        if (listing.item.ownerId !== ownerId) {
            throw new common_1.BadRequestException('Cannot delete a listing you do not own');
        }
        await this.prisma.listing.delete({ where: { id } });
        await this.prisma.item.update({
            where: { id: listing.itemId },
            data: { status: client_1.ItemStatus.AVAILABLE },
        });
        return { deleted: true, id };
    }
    async getPublicListings() {
        return this.prisma.listing.findMany({
            include: { item: true },
        });
    }
    async findById(id) {
        const listing = await this.prisma.listing.findUnique({
            where: { id },
            include: { item: true },
        });
        if (!listing)
            throw new common_1.NotFoundException('Listing not found');
        return listing;
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListingsService);
//# sourceMappingURL=listings.service.js.map