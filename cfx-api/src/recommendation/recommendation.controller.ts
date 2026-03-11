import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OptionalJwtAuthGuard } from '../common/guards/optional-jwt-auth.guard';
import { RecommendationService } from './recommendation.service';

@ApiTags('recommendations')
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly service: RecommendationService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Get('outfit')
  outfit(
    @Req() req: any,
    @Query('location') location: string,
    @Query('datetime') datetime?: string,
  ) {
    const userId = req?.user?.userId ?? null;
    return this.service.recommendOutfit(userId, location ?? 'Leeds', datetime);
  }
}
