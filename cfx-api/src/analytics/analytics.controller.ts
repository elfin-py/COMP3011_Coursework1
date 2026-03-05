import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('impact')
  impact() {
    return this.analyticsService.impact();
  }

  @Get('match-success')
  matchSuccess() {
    return this.analyticsService.matchSuccess();
  }

  @Get('recycler-capacity')
  recyclerCapacity() {
    return this.analyticsService.recyclerCapacity();
  }

  @Get('comfort-vs-temp')
  comfortVsTemp() {
    return this.analyticsService.comfortVsTemperature();
  }
}
