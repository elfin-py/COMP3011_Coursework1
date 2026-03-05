import { IsBoolean, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateSettingsDto {
  @IsOptional()
  @IsString()
  homeLocation?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsBoolean()
  dailyDigestEnabled?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(23)
  dailyDigestHour?: number;

  @IsOptional()
  @IsBoolean()
  emailDigestEnabled?: boolean;
}

