import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class SavedWeatherDto {
  @IsOptional()
  @IsNumber()
  temperatureC?: number;

  @IsOptional()
  @IsNumber()
  precipProb?: number;

  @IsOptional()
  @IsNumber()
  windKph?: number;

  @IsOptional()
  @IsString()
  conditions?: string;
}

class SavedItemDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  sizeLabel?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styleTags?: string[];
}

class SavedOutfitSnapshotDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  occasion?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styleTags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SavedItemDto)
  items?: SavedItemDto[];
}

export class ToggleSavedRecommendationDto {
  @IsDateString()
  recommendedFor: string;

  @IsString()
  location: string;

  @ValidateNested()
  @Type(() => SavedWeatherDto)
  weather: SavedWeatherDto;

  @ValidateNested()
  @Type(() => SavedOutfitSnapshotDto)
  outfit: SavedOutfitSnapshotDto;
}
