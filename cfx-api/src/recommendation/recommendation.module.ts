import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ClimateModule } from '../climate/climate.module';
import { TrendsModule } from '../trends/trends.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';

@Module({
  imports: [PrismaModule, ClimateModule, TrendsModule, FeedbackModule],
  controllers: [RecommendationController],
  providers: [RecommendationService],
  exports: [RecommendationService],
})
export class RecommendationModule {}
