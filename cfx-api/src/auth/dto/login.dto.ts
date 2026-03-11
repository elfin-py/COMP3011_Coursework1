import { IsString, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  username: string;

  @Matches(/^(?=.*[A-Z])(?=.*\d).{7,}$/, {
    message:
      'password must be at least 7 characters and include 1 capital letter and 1 number',
  })
  password: string;
}
