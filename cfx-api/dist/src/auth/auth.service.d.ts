import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        user: Omit<any, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    login(email: string, password: string): Promise<{
        user: Omit<{
            id: string;
            email: string;
            passwordHash: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        }, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refresh(refreshToken: string): Promise<{
        user: Omit<{
            id: string;
            email: string;
            passwordHash: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        }, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    private issueTokens;
    private sanitizeUser;
}
