import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClimateModule } from '../climate/climate.module';
import { RecommendationModule } from '../recommendation/recommendation.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [
    ClimateModule,
    RecommendationModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET || 'dev-access-secret',
    }),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
