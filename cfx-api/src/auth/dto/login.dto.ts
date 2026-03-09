import { IsOptional, IsString, Matches, ValidateIf } from 'class-validator';

export class LoginDto {
  @ValidateIf((o) => !o.email)
  @IsString()
  identifier?: string;

  // Backward-compatible fallback for older clients still posting `email`.
  @ValidateIf((o) => !o.identifier)
  @IsString()
  email?: string;

  @Matches(/^(?=.*[A-Z])(?=.*\d).{7,}$/, {
    message: 'password must be at least 7 characters and include 1 capital letter and 1 number',
  })
  password: string;
}
