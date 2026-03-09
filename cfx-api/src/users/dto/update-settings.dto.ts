import { IsOptional, IsString } from 'class-validator';

export class UpdateSettingsDto {
  @IsOptional()
  @IsString()
  homeLocation?: string;

  @IsOptional()
  @IsString()
  timezone?: string;
}
