import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { ToggleSavedRecommendationDto } from './dto/toggle-saved-recommendation.dto';
import { OutfitsService } from './outfits.service';

@ApiTags('outfits')
@UseGuards(JwtAuthGuard)
@Controller('outfits')
export class OutfitsController {
  constructor(private readonly outfitsService: OutfitsService) {}

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateOutfitDto) {
    return this.outfitsService.create(user.userId, dto);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.outfitsService.findAll(user.userId);
  }

  @Get('saved')
  findSaved(@CurrentUser() user: any) {
    return this.outfitsService.getSavedRecommendations(user.userId);
  }

  @Post(':id/usage')
  logUsage(
    @CurrentUser() user: any,
    @Param('id') id: string,
    @Body() dto: LogUsageDto,
  ) {
    return this.outfitsService.logUsage(user.userId, id, dto);
  }

  @Post('saved/toggle')
  toggleSaved(
    @CurrentUser() user: any,
    @Body() dto: ToggleSavedRecommendationDto,
  ) {
    return this.outfitsService.toggleSavedRecommendation(user.userId, dto);
  }
}
