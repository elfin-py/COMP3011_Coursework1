import { IsEmail, IsNumber, IsOptional, Matches } from 'class-validator';

export class RegisterDto {
  @Matches(/^[A-Za-z0-9_]{3,24}$/, {
    message: 'username must be 3-24 characters and contain only letters, numbers, or underscores',
  })
  username: string;

  @IsEmail()
  email: string;

  @Matches(/^(?=.*[A-Z])(?=.*\d).{7,}$/, {
    message: 'password must be at least 7 characters and include 1 capital letter and 1 number',
  })
  password: string;

  @IsOptional()
  @IsNumber()
  cityLat?: number;

  @IsOptional()
  @IsNumber()
  cityLon?: number;
}
