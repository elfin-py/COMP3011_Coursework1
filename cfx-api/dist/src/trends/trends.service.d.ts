import { PrismaService } from '../prisma/prisma.service';
export declare class TrendsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    topTags(platform: string, limit?: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        capturedAt: Date;
        platform: string;
        tag: string;
        volume: number;
        sentiment: number | null;
    }[]>;
    topTagsRecent(platform?: string, limit?: number, days?: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        capturedAt: Date;
        platform: string;
        tag: string;
        volume: number;
        sentiment: number | null;
    }[]>;
    materialPopularity(): import("@prisma/client").Prisma.PrismaPromise<{
        capturedAt: Date;
        season: string;
        materialPopularity: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    fetchPinterestImages(query: string): Promise<{
        url: unknown;
        source: string;
        query: string;
    }[]>;
    fetchGoogleImages(query: string): Promise<{
        url: string;
        source: string;
        query: string;
    }[]>;
}
