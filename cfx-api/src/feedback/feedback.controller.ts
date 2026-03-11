import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { FeedbackService } from './feedback.service';

class FeedbackDto {
  @IsString()
  targetId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
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
