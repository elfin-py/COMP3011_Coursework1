import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { ClimateService } from '../climate/climate.service';
import { ToggleSavedRecommendationDto } from './dto/toggle-saved-recommendation.dto';

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
        throw new NotFoundException(
          'One or more items not found or not owned by user',
        );
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

  getSavedRecommendations(userId: string) {
    return this.prisma.savedRecommendation.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
  }

  async toggleSavedRecommendation(
    userId: string,
    dto: ToggleSavedRecommendationDto,
  ) {
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
      throw new BadRequestException(
        'You can save up to 20 recommendations at a time',
      );
    }

    const created = await this.prisma.savedRecommendation.create({
      data: {
        userId,
        outfitId,
        outfitName: dto.outfit.name,
        location: dto.location,
        recommendedFor,
        weatherSummary: dto.weather as Prisma.InputJsonValue,
        outfitSnapshot: dto.outfit as unknown as Prisma.InputJsonValue,
      },
    });
    return { saved: true, id: created.id };
  }

  async logUsage(userId: string, outfitId: string, dto: LogUsageDto) {
    const outfit = await this.prisma.outfit.findUnique({
      where: { id: outfitId },
    });
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
