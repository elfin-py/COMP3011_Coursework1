import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
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
    comfortVsTemp(): Promise<{
        location: string;
        temperatureC: number;
        avgInsulation: number;
        capturedAt: Date;
    }[]>;
}
