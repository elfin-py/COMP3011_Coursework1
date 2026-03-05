import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { ClimateService } from '../climate/climate.service';

@Injectable()
export class OutfitsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly climateService: ClimateService,
  ) {}

  async create(userId: string, dto: CreateOutfitDto) {
    const itemIds = dto.itemIds ?? [];
    if (itemIds.length > 0) {
      const items = await this.prisma.item.findMany({
        where: { id: { in: itemIds }, ownerId: userId },
      });
      if (items.length !== itemIds.length) {
        throw new NotFoundException('One or more items not found or not owned by user');
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

  findAll(userId: string) {
    return this.prisma.outfit.findMany({
      where: { userId },
      include: { items: { include: { item: true } } },
    });
  }

  async logUsage(userId: string, outfitId: string, dto: LogUsageDto) {
    const outfit = await this.prisma.outfit.findUnique({ where: { id: outfitId } });
    if (!outfit || outfit.userId !== userId) {
      throw new NotFoundException('Outfit not found for user');
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
}
