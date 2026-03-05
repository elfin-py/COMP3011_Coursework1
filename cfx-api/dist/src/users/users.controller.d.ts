import { UpdateSettingsDto } from './dto/update-settings.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    meSettings(user: any): Promise<{
        homeLocation: string;
        timezone: string;
        dailyDigestEnabled: boolean;
        dailyDigestHour: number;
        emailDigestEnabled: boolean;
        lastDigestSentAt: Date | null;
    }>;
    updateSettings(user: any, dto: UpdateSettingsDto): Promise<{
        homeLocation: string;
        timezone: string;
        dailyDigestEnabled: boolean;
        dailyDigestHour: number;
        emailDigestEnabled: boolean;
        lastDigestSentAt: Date | null;
    }>;
}
