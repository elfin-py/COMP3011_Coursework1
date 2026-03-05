import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Category } from '@prisma/client';

export class CreateItemDto {
  @IsEnum(Category)
  category: Category;

  @IsString()
  sizeLabel: string;

  @IsString()
  material: string;

  @IsInt()
  @Min(1)
  condition: number; // 1-5 scale

  @IsArray()
  @IsNumber({}, { each: true })
  styleEmbedding: number[];

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
}
