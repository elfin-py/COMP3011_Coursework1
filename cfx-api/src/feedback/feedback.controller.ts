import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { FeedbackService } from './feedback.service';

class FeedbackDto {
  targetId: string;
  rating: number;
  note?: string;
}

@ApiTags('feedback')
@UseGuards(JwtAuthGuard)
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('recommendation')
  submit(@CurrentUser() user: any, @Body() dto: FeedbackDto) {
    return this.feedbackService.submit(
      user.userId,
      dto.targetId,
      dto.rating,
      dto.note,
    );
  }
}
