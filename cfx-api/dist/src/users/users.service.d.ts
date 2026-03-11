import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        } | null;
    } & {
        id: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        username: string;
    }>;
    findByUsername(username: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        username: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findById(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        username: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    getSettings(userId: string): Promise<{
        homeLocation: string;
        timezone: string;
    }>;
    updateSettings(userId: string, dto: UpdateSettingsDto): Promise<{
        homeLocation: string;
        timezone: string;
    }>;
}
