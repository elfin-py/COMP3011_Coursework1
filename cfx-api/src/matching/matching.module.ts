import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ListingsModule } from '../listings/listings.module';
import { MatchingController } from './matching.controller';
import { MatchingService } from './matching.service';

@Module({
  imports: [PrismaModule, ListingsModule],
  controllers: [MatchingController],
  providers: [MatchingService],
})
export class MatchingModule {}
