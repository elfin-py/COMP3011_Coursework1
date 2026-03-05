import { Controller, Get, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecommendationService } from './recommendation.service';

@ApiTags('recommendations')
@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly service: RecommendationService) {}

  @Get('outfit')
  outfit(
    @Req() req: any,
    @Query('location') location: string,
    @Query('datetime') datetime?: string,
  ) {
    const userId = (req as any)?.user?.userId ?? null;
    return this.service.recommendOutfit(userId, location ?? 'Leeds', datetime);
  }
}
