import { IsArray, IsOptional, IsString } from 'class-validator';

export class ChatRecommendationDto {
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  datetime?: string;

  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  context?: string;

  @IsOptional()
  @IsString()
  occasion?: string;

  @IsOptional()
  @IsString()
  activity?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styleTags?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  avoidTags?: string[];
}
