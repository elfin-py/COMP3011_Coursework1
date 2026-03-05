"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const node_cron_1 = __importDefault(require("node-cron"));
let UsersService = UsersService_1 = class UsersService {
    prisma;
    logger = new common_1.Logger(UsersService_1.name);
    digestTask;
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        this.digestTask = node_cron_1.default.schedule('*/15 * * * *', () => {
            this.runDigestSweep().catch((e) => {
                this.logger.warn(`Digest sweep failed: ${e?.message ?? e}`);
            });
        });
    }
    onModuleDestroy() {
        this.digestTask?.stop();
    }
    async create(dto) {
        return this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash: dto.passwordHash,
                role: client_1.Role.USER,
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
    findByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }
    findById(id) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    async getSettings(userId) {
        const profile = await this.prisma.profile.findUnique({ where: { userId } });
        if (!profile)
            throw new common_1.NotFoundException('Profile not found');
        return {
            homeLocation: profile.homeLocation,
            timezone: profile.timezone,
            dailyDigestEnabled: profile.dailyDigestEnabled,
            dailyDigestHour: profile.dailyDigestHour,
            emailDigestEnabled: profile.emailDigestEnabled,
            lastDigestSentAt: profile.lastDigestSentAt,
        };
    }
    async updateSettings(userId, dto) {
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
    async runDigestSweep() {
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
            if (hour !== profile.dailyDigestHour)
                continue;
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
            if (sentDayKey === dayKey)
                continue;
            await this.prisma.profile.update({
                where: { id: profile.id },
                data: { lastDigestSentAt: now },
            });
            this.logger.log(`Daily digest due for ${profile.user.email} at ${profile.homeLocation} (${tz})`);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map