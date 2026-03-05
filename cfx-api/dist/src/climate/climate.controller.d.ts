import { ClimateService } from './climate.service';
import { CreateClimateDto } from './climate.dto';
export declare class ClimateController {
    private readonly climateService;
    constructor(climateService: ClimateService);
    create(dto: CreateClimateDto): import("@prisma/client").Prisma.Prisma__ClimateSnapshotClient<{
        id: string;
        location: string;
        capturedAt: Date;
        validFor: Date | null;
        temperatureC: number;
        humidity: number | null;
        windKph: number | null;
        precipProb: number | null;
        conditions: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    latest(location: string, datetime?: string, tz?: string, forceLive?: string): Promise<{
        id: string;
        location: string;
        capturedAt: Date;
        validFor: Date | null;
        temperatureC: number;
        humidity: number | null;
        windKph: number | null;
        precipProb: number | null;
        conditions: string | null;
    } | null>;
    localNow(location: string): Promise<{
        timezone: any;
        localNow: string;
    }>;
}
