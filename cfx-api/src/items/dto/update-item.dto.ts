import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Category, ItemStatus } from '@prisma/client';

export class UpdateItemDto {
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @IsOptional()
  @IsString()
  sizeLabel?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  condition?: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  styleEmbedding?: number[];

  @IsOptional()
  photos?: Record<string, unknown>;

  @IsOptional()
  @IsNumber()
  insulation?: number;

  @IsOptional()
  @IsNumber()
  waterproof?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styleTags?: string[];

  @IsOptional()
  @IsEnum(ItemStatus)
  status?: ItemStatus;
}
