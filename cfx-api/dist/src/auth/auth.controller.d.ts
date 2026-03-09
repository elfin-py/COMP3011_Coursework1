import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        user: Omit<any, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        user: Omit<{
            id: string;
            email: string;
            passwordHash: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
            username: string;
        }, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refresh(dto: RefreshDto): Promise<{
        user: Omit<{
            id: string;
            email: string;
            passwordHash: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
            username: string;
        }, "passwordHash">;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
