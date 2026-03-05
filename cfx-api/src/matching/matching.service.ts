import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ListingsService } from '../listings/listings.service';

type ScoreBreakdown = {
  style: number;
  size: number;
  condition: number;
  distance: number;
  sustain: number;
  demand: number;
  total: number;
};

@Injectable()
export class MatchingService {
  private readonly weights = {
    style: 0.35,
    size: 0.2,
    condition: 0.1,
    distance: 0.15,
    sustain: 0.1,
    demand: 0.1,
  };

  constructor(
    private readonly prisma: PrismaService,
    private readonly listingsService: ListingsService,
  ) {}

  async generateMatches(listingId: string) {
    const listing = await this.listingsService.findById(listingId);
    const sourceItem = listing.item;
    const sourceOwnerProfile = await this.prisma.profile.findUnique({
      where: { userId: sourceItem.ownerId },
    });
    if (!sourceOwnerProfile)
      throw new NotFoundException('Source owner profile missing');

    const candidates = await this.prisma.item.findMany({
      where: {
        id: { not: sourceItem.id },
        ownerId: { not: sourceItem.ownerId },
        category: sourceItem.category,
        status: ItemStatus.AVAILABLE,
      },
      include: { owner: { include: { profile: true } } },
    });

    const demandBalance = await this.computeDemandBalance(sourceItem.category);

    const scored = candidates.map((item) => {
      const breakdown = this.scoreItem(
        sourceItem,
        sourceOwnerProfile,
        item,
        demandBalance,
      );
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

  private scoreItem(
    sourceItem: any,
    sourceProfile: any,
    candidate: any,
    demandBalance: number,
  ): ScoreBreakdown {
    const style = this.cosine(sourceItem.styleEmbedding, candidate.styleEmbedding);
    const size = this.sizePenalty(sourceItem.sizeLabel, candidate.sizeLabel);
    const condition = Math.min(candidate.condition, 5) / 5;
    const distance = this.inverseDistance(
      sourceProfile.cityLat,
      sourceProfile.cityLon,
      candidate.owner.profile?.cityLat ?? sourceProfile.cityLat,
      candidate.owner.profile?.cityLon ?? sourceProfile.cityLon,
    );
    const sustain =
      candidate.material.toLowerCase().includes('organic') ||
      candidate.material.toLowerCase().includes('recycled')
        ? 1
        : 0.4;
    const demand = demandBalance;

    const total =
      this.weights.style * style +
      this.weights.size * size +
      this.weights.condition * condition +
      this.weights.distance * distance +
      this.weights.sustain * sustain +
      this.weights.demand * demand;

    return { style, size, condition, distance, sustain, demand, total };
  }

  private sizePenalty(source: string, candidate: string) {
    if (source === candidate) return 1;
    const delta = Math.abs((source.charCodeAt(0) || 0) - (candidate.charCodeAt(0) || 0));
    return Math.max(0, 1 - delta * 0.25);
  }

  private cosine(a: number[], b: number[]) {
    if (!a?.length || !b?.length) return 0;
    const len = Math.min(a.length, b.length);
    let dot = 0,
      na = 0,
      nb = 0;
    for (let i = 0; i < len; i++) {
      dot += a[i] * b[i];
      na += a[i] * a[i];
      nb += b[i] * b[i];
    }
    const denom = Math.sqrt(na) * Math.sqrt(nb);
    if (denom === 0) return 0;
    return dot / denom;
  }

  private inverseDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const d = this.haversine(lat1, lon1, lat2, lon2);
    return 1 / (1 + d); // normalize to (0,1]
  }

  private haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
    const toRad = (v: number) => (v * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private async computeDemandBalance(category: any) {
    const total = await this.prisma.item.count();
    const inCategory = await this.prisma.item.count({ where: { category } });
    if (total === 0) return 0.5;
    const ratio = inCategory / total;
    return Math.max(0, 1 - ratio); // more bonus if under-supplied
  }
}
