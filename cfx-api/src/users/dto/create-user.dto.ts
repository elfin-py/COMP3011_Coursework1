import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  passwordHash: string;

  @IsNumber()
  cityLat: number;

  @IsNumber()
  cityLon: number;
}
