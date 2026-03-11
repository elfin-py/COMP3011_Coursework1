import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  passwordHash: string;

  @IsNumber()
  cityLat: number;

  @IsNumber()
  cityLon: number;
}
