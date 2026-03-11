import { Matches } from 'class-validator';

export class ChangePasswordDto {
  @Matches(/^(?=.*[A-Z])(?=.*\d).{7,}$/, {
    message:
      'currentPassword must be at least 7 characters and include 1 capital letter and 1 number',
  })
  currentPassword: string;

  @Matches(/^(?=.*[A-Z])(?=.*\d).{7,}$/, {
    message:
      'newPassword must be at least 7 characters and include 1 capital letter and 1 number',
  })
  newPassword: string;
}
