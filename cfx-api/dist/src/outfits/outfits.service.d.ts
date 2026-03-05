import { PrismaService } from '../prisma/prisma.service';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { ClimateService } from '../climate/climate.service';
export declare class OutfitsService {
    private readonly prisma;
    private readonly climateService;
    constructor(prisma: PrismaService, climateService: ClimateService);
    create(userId: string, dto: CreateOutfitDto): Promise<{
        items: ({
            item: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                styleTags: string[];
                ownerId: string;
                category: import("@prisma/client").$Enums.Category;
                sizeLabel: string;
                material: string;
                condition: number;
                styleEmbedding: number[];
                insulation: number;
                waterproof: number;
                status: import("@prisma/client").$Enums.ItemStatus;
                photos: import("@prisma/client/runtime/client").JsonValue | null;
            };
        } & {
            itemId: string;
            outfitId: string;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        styleTags: string[];
        occasion: string | null;
        userId: string;
    }>;
    findAll(userId: string): import("@prisma/client").Prisma.PrismaPromise<({
        items: ({
            item: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                styleTags: string[];
                ownerId: string;
                category: import("@prisma/client").$Enums.Category;
                sizeLabel: string;
                material: string;
                condition: number;
                styleEmbedding: number[];
                insulation: number;
                waterproof: number;
                status: import("@prisma/client").$Enums.ItemStatus;
                photos: import("@prisma/client/runtime/client").JsonValue | null;
            };
        } & {
            itemId: string;
            outfitId: string;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        styleTags: string[];
        occasion: string | null;
        userId: string;
    })[]>;
    logUsage(userId: string, outfitId: string, dto: LogUsageDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        location: string;
        temperatureC: number | null;
        windKph: number | null;
        precipProb: number | null;
        outfitId: string;
        usedAt: Date;
        climateSnapshotId: string | null;
    }>;
}
