import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ItemStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}

  async routeItem(itemId: string) {
    const item = await this.prisma.item.findUnique({
      where: { id: itemId },
      include: { owner: { include: { profile: true } } },
    });
    if (!item) throw new NotFoundException('Item not found');
    if (item.status !== ItemStatus.AVAILABLE && item.status !== ItemStatus.RESERVED) {
      throw new BadRequestException('Item cannot be routed in current status');
    }

    const recyclers = await this.prisma.recycler.findMany({
      where: { materials: { hasSome: [item.material.toLowerCase()] } },
    });
    if (recyclers.length === 0) {
      throw new BadRequestException('No recycler accepts this material');
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
      data: { status: ItemStatus.DONATED },
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
}
