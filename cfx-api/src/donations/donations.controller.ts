import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { DonationsService } from './donations.service';

@ApiTags('donations')
@UseGuards(JwtAuthGuard)
@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post(':itemId/route')
  route(@Param('itemId') itemId: string) {
    return this.donationsService.routeItem(itemId);
  }
}
