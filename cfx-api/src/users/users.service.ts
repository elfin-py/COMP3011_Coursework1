import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        passwordHash: dto.passwordHash,
        role: Role.USER,
        profile: {
          create: {
            styleTags: [],
            sizes: {},
            cityLat: dto.cityLat,
            cityLon: dto.cityLon,
            homeLocation: '',
            timezone: '',
          },
        },
      },
      include: { profile: true },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const valid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Current password is incorrect');
    }
    if (dto.currentPassword === dto.newPassword) {
      throw new BadRequestException('New password must be different from current password');
    }

    const passwordHash = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    return { message: 'Password updated successfully' };
  }

  async getSettings(userId: string) {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profile not found');
    return {
      homeLocation: profile.homeLocation,
      timezone: profile.timezone,
    };
  }

  async updateSettings(userId: string, dto: UpdateSettingsDto) {
    const profile = await this.prisma.profile.update({
      where: { userId },
      data: {
        homeLocation: dto.homeLocation,
        timezone: dto.timezone,
      },
    });
    return {
      homeLocation: profile.homeLocation,
      timezone: profile.timezone,
    };
  }
}
