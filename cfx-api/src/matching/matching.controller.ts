import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchingService } from './matching.service';

@ApiTags('matching')
@Controller('listings/:id')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post('match')
  generate(@Param('id') id: string) {
    return this.matchingService.generateMatches(id);
  }
}
