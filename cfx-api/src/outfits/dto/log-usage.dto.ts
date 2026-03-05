import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LogUsageDto {
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDateString()
  usedAt: string;
}
