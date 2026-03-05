import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatRecommendationDto } from './dto/chat-recommendation.dto';
import { ChatService } from './chat.service';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('recommendation')
  recommendation(
    @Body() dto: ChatRecommendationDto,
    @Headers('authorization') authorization?: string,
  ) {
    return this.chatService.recommendFromChat(dto, authorization);
  }
}

