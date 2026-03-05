import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { OutfitsController } from './outfits.controller';
import { OutfitsService } from './outfits.service';
import { ClimateModule } from '../climate/climate.module';

@Module({
  imports: [PrismaModule, ClimateModule],
  controllers: [OutfitsController],
  providers: [OutfitsService],
  exports: [OutfitsService],
})
export class OutfitsModule {}
