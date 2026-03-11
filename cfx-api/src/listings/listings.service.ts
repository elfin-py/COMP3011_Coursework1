import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, ItemStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateListingDto) {
    const item = await this.prisma.item.findUnique({
      where: { id: dto.itemId },
    });
    if (!item) throw new NotFoundException('Item not found');
    if (item.ownerId !== ownerId)
      throw new BadRequestException('Cannot list an item you do not own');
    if (item.status !== ItemStatus.AVAILABLE)
      throw new BadRequestException('Item is not available');

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
        rentalTerms: (dto.rentalTerms ?? {}) as Prisma.InputJsonValue,
      },
      include: { item: true },
    });

    await this.prisma.item.update({
      where: { id: item.id },
      data: { status: ItemStatus.RESERVED },
    });

    return listing;
  }

  async update(ownerId: string, id: string, dto: UpdateListingDto) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: { item: true },
    });
    if (!listing) throw new NotFoundException('Listing not found');
    if (listing.item.ownerId !== ownerId) {
      throw new BadRequestException('Cannot update a listing you do not own');
    }
    if (dto.itemId && dto.itemId !== listing.itemId) {
      throw new BadRequestException('Cannot change the item attached to a listing');
    }

    return this.prisma.listing.update({
      where: { id },
      data: {
        intent: dto.intent,
        availabilityStart:
          dto.availabilityStart !== undefined
            ? dto.availabilityStart
              ? new Date(dto.availabilityStart)
              : null
            : undefined,
        availabilityEnd:
          dto.availabilityEnd !== undefined
            ? dto.availabilityEnd
              ? new Date(dto.availabilityEnd)
              : null
            : undefined,
        rentalTerms:
          dto.rentalTerms !== undefined
            ? ((dto.rentalTerms ?? {}) as Prisma.InputJsonValue)
            : undefined,
      },
      include: { item: true },
    });
  }

  async remove(ownerId: string, id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: { item: true },
    });
    if (!listing) throw new NotFoundException('Listing not found');
    if (listing.item.ownerId !== ownerId) {
      throw new BadRequestException('Cannot delete a listing you do not own');
    }

    await this.prisma.listing.delete({ where: { id } });
    await this.prisma.item.update({
      where: { id: listing.itemId },
      data: { status: ItemStatus.AVAILABLE },
    });

    return { deleted: true, id };
  }

  async getPublicListings() {
    return this.prisma.listing.findMany({
      include: { item: true },
    });
  }

  async findById(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: { item: true },
    });
    if (!listing) throw new NotFoundException('Listing not found');
    return listing;
  }
}
