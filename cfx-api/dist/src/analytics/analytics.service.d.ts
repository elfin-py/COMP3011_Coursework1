import { PrismaService } from '../prisma/prisma.service';
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    impact(): Promise<{
        itemsDiverted: number;
        co2SavedEstimate: number;
    }>;
    matchSuccess(): Promise<{
        totalMatches: number;
        accepted: number;
        successRate: number;
    }>;
    recyclerCapacity(): Promise<{
        recycler: string;
        capacityRemainingKg: number;
        co2PerKg: number;
    }[]>;
    comfortVsTemperature(): Promise<{
        location: string;
        temperatureC: number;
        avgInsulation: number;
        capturedAt: Date;
    }[]>;
}
