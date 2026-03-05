import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TargetType } from '@prisma/client';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  submit(userId: string, targetId: string, rating: number, note?: string) {
    return this.prisma.feedback.create({
      data: {
        userId,
        targetId,
        targetType: TargetType.RECOMMENDATION,
        rating,
        note,
      },
    });
  }

  async userAverage(userId: string) {
    const agg = await this.prisma.feedback.aggregate({
      where: { userId, targetType: TargetType.RECOMMENDATION },
      _avg: { rating: true },
      _count: { rating: true },
    });
    return { avg: agg._avg.rating ?? null, count: agg._count.rating ?? 0 };
  }
}
