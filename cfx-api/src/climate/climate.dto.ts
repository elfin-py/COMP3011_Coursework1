import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClimateDto {
  @IsString()
  location: string;

  @IsDateString()
  capturedAt: string;

  @IsOptional()
  @IsDateString()
  validFor?: string;

  @IsNumber()
  temperatureC: number;

  @IsOptional()
  @IsNumber()
  humidity?: number;

  @IsOptional()
  @IsNumber()
  windKph?: number;

  @IsOptional()
  @IsNumber()
  precipProb?: number;

  @IsOptional()
  @IsString()
  conditions?: string;
}
