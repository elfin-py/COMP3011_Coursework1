import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { ListingsModule } from './listings/listings.module';
import { MatchingModule } from './matching/matching.module';
import { DonationsModule } from './donations/donations.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ClimateModule } from './climate/climate.module';
import { OutfitsModule } from './outfits/outfits.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { TrendsModule } from './trends/trends.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        transport:
          process.env.NODE_ENV === 'production'
            ? undefined
            : {
                target: 'pino-pretty',
                options: { singleLine: true, colorize: true },
              },
      },
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    ItemsModule,
    ListingsModule,
    MatchingModule,
    DonationsModule,
    AnalyticsModule,
    ClimateModule,
    OutfitsModule,
    RecommendationModule,
    TrendsModule,
    FeedbackModule,
    ChatModule,
  ],
})
export class AppModule {}
