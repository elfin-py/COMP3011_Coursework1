import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ClimateController } from './climate.controller';
import { ClimateService } from './climate.service';

@Module({
  imports: [PrismaModule],
  controllers: [ClimateController],
  providers: [ClimateService],
  exports: [ClimateService],
})
export class ClimateModule {}
