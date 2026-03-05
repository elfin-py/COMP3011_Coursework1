import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async impact() {
    const donated = await this.prisma.donation.count();
    const totalCo2 = await this.prisma.donation.aggregate({
      _sum: { impactEstimate: true },
    });
    return {
      itemsDiverted: donated,
      co2SavedEstimate: totalCo2._sum.impactEstimate ?? 0,
    };
  }

  async matchSuccess() {
    const matches = await this.prisma.match.count();
    const accepted = await this.prisma.match.count({
      where: { status: 'ACCEPTED' },
    });
    return {
      totalMatches: matches,
      accepted,
      successRate: matches === 0 ? 0 : accepted / matches,
    };
  }

  async recyclerCapacity() {
    const recyclers = await this.prisma.recycler.findMany();
    return recyclers.map((r) => ({
      recycler: r.name,
      capacityRemainingKg: r.capacityKg,
      co2PerKg: r.co2PerKg,
    }));
  }

  async comfortVsTemperature() {
    // simple aggregate: average insulation of outfits vs latest climate snapshot
    const climates = await this.prisma.climateSnapshot.findMany({
      orderBy: { capturedAt: 'desc' },
      take: 10,
    });
    return Promise.all(
      climates.map(async (c) => {
        const outfits = await this.prisma.outfit.findMany({
          include: { items: { include: { item: true } } },
          take: 5,
        });
        const avgInsulation =
          outfits.reduce((acc, o) => {
            const ins =
              o.items.reduce((a, oi) => a + (oi.item.insulation ?? 0), 0) /
              (o.items.length || 1);
            return acc + ins;
          }, 0) / (outfits.length || 1);
        return {
          location: c.location,
          temperatureC: c.temperatureC,
          avgInsulation,
          capturedAt: c.capturedAt,
        };
      }),
    );
  }
}
