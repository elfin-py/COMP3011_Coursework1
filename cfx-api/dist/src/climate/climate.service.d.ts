import { PrismaService } from '../prisma/prisma.service';
import { CreateClimateDto } from './climate.dto';
export declare class ClimateService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private cityCoords;
    private cityTimezones;
    private normaliseLocation;
    private zonedDateTimeToUtc;
    private geocode;
    private timezoneForCoords;
    private resolveLocationMeta;
    private formatLocalNowForTz;
    localNow(location: string): Promise<{
        timezone: any;
        localNow: string;
    }>;
    private fetchLiveWeather;
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
    latest(location: string, datetime?: string, tz?: string, forceLive?: boolean): Promise<{
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
}
