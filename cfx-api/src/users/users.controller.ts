import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me/settings')
  meSettings(@CurrentUser() user: any) {
    return this.usersService.getSettings(user.userId);
  }

  @Patch('me/settings')
  updateSettings(@CurrentUser() user: any, @Body() dto: UpdateSettingsDto) {
    return this.usersService.updateSettings(user.userId, dto);
  }
}

