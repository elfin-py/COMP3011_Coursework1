import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  passwordHash: string;

  @IsNumber()
  cityLat: number;

  @IsNumber()
  cityLon: number;
}
