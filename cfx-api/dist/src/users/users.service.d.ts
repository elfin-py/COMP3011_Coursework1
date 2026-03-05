import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';
export declare class UsersService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly logger;
    private digestTask?;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    create(dto: CreateUserDto): Promise<{
        profile: {
            id: string;
            userId: string;
            styleTags: string[];
            sizes: import("@prisma/client/runtime/client").JsonValue;
            cityLat: number;
            cityLon: number;
            homeLocation: string;
            timezone: string;
            dailyDigestEnabled: boolean;
            dailyDigestHour: number;
            emailDigestEnabled: boolean;
            lastDigestSentAt: Date | null;
        } | null;
    } & {
        id: string;
        email: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findById(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    getSettings(userId: string): Promise<{
        homeLocation: string;
        timezone: string;
        dailyDigestEnabled: boolean;
        dailyDigestHour: number;
        emailDigestEnabled: boolean;
        lastDigestSentAt: Date | null;
    }>;
    updateSettings(userId: string, dto: UpdateSettingsDto): Promise<{
        homeLocation: string;
        timezone: string;
        dailyDigestEnabled: boolean;
        dailyDigestHour: number;
        emailDigestEnabled: boolean;
        lastDigestSentAt: Date | null;
    }>;
    private runDigestSweep;
}
