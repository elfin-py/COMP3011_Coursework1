import { IsEmail, IsNumber, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsOptional()
  @IsNumber()
  cityLat?: number;

  @IsOptional()
  @IsNumber()
  cityLon?: number;
}
