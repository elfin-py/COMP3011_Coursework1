import { Body, Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClimateService } from './climate.service';
import { CreateClimateDto } from './climate.dto';

@ApiTags('climate')
@Controller('climate')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Post()
  create(@Body() dto: CreateClimateDto) {
    return this.climateService.create(dto);
  }

  @Post('latest')
  latest(
    @Query('location') location: string,
    @Query('datetime') datetime?: string,
    @Query('tz') tz?: string,
    @Query('force_live') forceLive?: string,
  ) {
    return this.climateService.latest(
      location,
      datetime,
      tz,
      forceLive === 'true',
    );
  }

  @Post('local-now')
  localNow(@Query('location') location: string) {
    return this.climateService.localNow(location);
  }
}
