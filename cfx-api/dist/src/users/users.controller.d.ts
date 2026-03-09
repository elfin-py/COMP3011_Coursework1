import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    meSettings(user: any): Promise<{
        homeLocation: string;
        timezone: string;
    }>;
    updateSettings(user: any, dto: UpdateSettingsDto): Promise<{
        homeLocation: string;
        timezone: string;
    }>;
    changePassword(user: any, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
