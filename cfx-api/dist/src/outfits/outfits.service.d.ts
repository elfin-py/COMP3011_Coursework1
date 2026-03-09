import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { ClimateService } from '../climate/climate.service';
import { ToggleSavedRecommendationDto } from './dto/toggle-saved-recommendation.dto';
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
                status: import("@prisma/client").$Enums.ItemStatus;
                photos: Prisma.JsonValue | null;
                insulation: number;
                waterproof: number;
            };
        } & {
            itemId: string;
            outfitId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        styleTags: string[];
        name: string;
        occasion: string | null;
    }>;
    findAll(userId: string): Prisma.PrismaPromise<({
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
                status: import("@prisma/client").$Enums.ItemStatus;
                photos: Prisma.JsonValue | null;
                insulation: number;
                waterproof: number;
            };
        } & {
            itemId: string;
            outfitId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        styleTags: string[];
        name: string;
        occasion: string | null;
    })[]>;
    getSavedRecommendations(userId: string): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        userId: string;
        location: string;
        outfitId: string | null;
        recommendedFor: Date;
        outfitName: string;
        weatherSummary: Prisma.JsonValue;
        outfitSnapshot: Prisma.JsonValue;
    }[]>;
    toggleSavedRecommendation(userId: string, dto: ToggleSavedRecommendationDto): Promise<{
        saved: boolean;
        id: string;
    }>;
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
