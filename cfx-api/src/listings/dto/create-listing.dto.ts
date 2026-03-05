import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { Intent } from '@prisma/client';

export class CreateListingDto {
  @IsEnum(Intent)
  intent: Intent;

  @IsOptional()
  @IsDateString()
  availabilityStart?: string;

  @IsOptional()
  @IsDateString()
  availabilityEnd?: string;

  @IsOptional()
  rentalTerms?: Record<string, unknown>;

  @IsString()
  itemId: string;
}
