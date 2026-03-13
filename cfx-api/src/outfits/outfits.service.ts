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

  private imageKey(url: string) {
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
    } catch {
      return url.split('?')[0].toLowerCase();
    }
  }

  private dedupeImageUrls(urls?: string[]) {
    const seen = new Set<string>();
    const deduped: string[] = [];
    for (const url of urls || []) {
      if (!url) continue;
      const key = this.imageKey(url);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      deduped.push(url);
      if (deduped.length >= 2) break;
    }
    return deduped;
  }

  private sanitiseOutfitSnapshot(snapshot: any) {
    if (!snapshot || typeof snapshot !== 'object') return snapshot;
    return {
      ...snapshot,
      imageUrls: this.dedupeImageUrls(snapshot.imageUrls),
    };
  }

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

  async getSavedRecommendations(userId: string) {
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
        weatherSummary: dto.weather as Prisma.InputJsonValue,
        outfitSnapshot: sanitisedOutfit as unknown as Prisma.InputJsonValue,
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
