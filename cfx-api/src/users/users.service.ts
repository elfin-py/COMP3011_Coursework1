import { Injectable, Logger, NotFoundException, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import cron from 'node-cron';

@Injectable()
export class UsersService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(UsersService.name);
  private digestTask?: cron.ScheduledTask;

  constructor(private readonly prisma: PrismaService) {}

  onModuleInit() {
    // Run every 15 minutes; send once per local day when hour matches user preference.
    this.digestTask = cron.schedule('*/15 * * * *', () => {
      this.runDigestSweep().catch((e) => {
        this.logger.warn(`Digest sweep failed: ${e?.message ?? e}`);
      });
    });
  }

  onModuleDestroy() {
    this.digestTask?.stop();
  }

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
            homeLocation: 'Leeds',
            timezone: 'Europe/London',
            dailyDigestEnabled: false,
            dailyDigestHour: 7,
            emailDigestEnabled: false,
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

  findByIdentifier(identifier: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getSettings(userId: string) {
    const profile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profile not found');
    return {
      homeLocation: profile.homeLocation,
      timezone: profile.timezone,
      dailyDigestEnabled: profile.dailyDigestEnabled,
      dailyDigestHour: profile.dailyDigestHour,
      emailDigestEnabled: profile.emailDigestEnabled,
      lastDigestSentAt: profile.lastDigestSentAt,
    };
  }

  async updateSettings(userId: string, dto: UpdateSettingsDto) {
    const profile = await this.prisma.profile.update({
      where: { userId },
      data: {
        homeLocation: dto.homeLocation,
        timezone: dto.timezone,
        dailyDigestEnabled: dto.dailyDigestEnabled,
        dailyDigestHour: dto.dailyDigestHour,
        emailDigestEnabled: dto.emailDigestEnabled,
      },
    });
    return {
      homeLocation: profile.homeLocation,
      timezone: profile.timezone,
      dailyDigestEnabled: profile.dailyDigestEnabled,
      dailyDigestHour: profile.dailyDigestHour,
      emailDigestEnabled: profile.emailDigestEnabled,
      lastDigestSentAt: profile.lastDigestSentAt,
    };
  }

  private async runDigestSweep() {
    const now = new Date();
    const profiles = await this.prisma.profile.findMany({
      where: { dailyDigestEnabled: true },
      include: { user: true },
    });
    for (const profile of profiles) {
      const tz = profile.timezone || 'UTC';
      const local = new Intl.DateTimeFormat('en-GB', {
        timeZone: tz,
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).formatToParts(now);
      const hour = Number(local.find((p) => p.type === 'hour')?.value ?? '0');
      const dayKey = `${local.find((p) => p.type === 'year')?.value}-${local.find((p) => p.type === 'month')?.value}-${local.find((p) => p.type === 'day')?.value}`;
      if (hour !== profile.dailyDigestHour) continue;

      const sentParts = profile.lastDigestSentAt
        ? new Intl.DateTimeFormat('en-GB', {
            timeZone: tz,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(profile.lastDigestSentAt)
        : null;
      const sentDayKey = sentParts
        ? (() => {
            const [d, m, y] = sentParts.split('/');
            return `${y}-${m}-${d}`;
          })()
        : null;
      if (sentDayKey === dayKey) continue;

      // We keep transport simple here: mark due digests; delivery can be wired to SMTP/queue later.
      await this.prisma.profile.update({
        where: { id: profile.id },
        data: { lastDigestSentAt: now },
      });
      this.logger.log(
        `Daily digest due for ${profile.user.email} at ${profile.homeLocation} (${tz})`,
      );
    }
  }
}
