import {
  IsArray,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOutfitDto {
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
  @IsString({ each: true })
  itemIds?: string[];
}
