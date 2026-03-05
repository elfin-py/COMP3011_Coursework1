import { TrendsService } from './trends.service';
import type { Response } from 'express';
export declare class TrendsController {
    private readonly trendsService;
    constructor(trendsService: TrendsService);
    top(platform?: string, limit?: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        capturedAt: Date;
        platform: string;
        tag: string;
        volume: number;
        sentiment: number | null;
    }[]>;
    materials(): import("@prisma/client").Prisma.PrismaPromise<{
        capturedAt: Date;
        season: string;
        materialPopularity: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    pinterest(q: string): Promise<{
        images: {
            url: unknown;
            source: string;
            query: string;
        }[];
    }>;
    google(q: string): Promise<{
        images: {
            url: string;
            source: string;
            query: string;
        }[];
    }>;
    proxyPinterest(url: string, res: Response): Promise<void>;
}
