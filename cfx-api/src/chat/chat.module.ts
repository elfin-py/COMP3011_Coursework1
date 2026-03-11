import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClimateModule } from '../climate/climate.module';
import { requiredEnv } from '../common/config/auth-config';
import { RecommendationModule } from '../recommendation/recommendation.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [
    ClimateModule,
    RecommendationModule,
    JwtModule.register({
      secret: requiredEnv('JWT_ACCESS_SECRET'),
    }),
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
