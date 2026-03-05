import { CreateOutfitDto } from './dto/create-outfit.dto';
import { LogUsageDto } from './dto/log-usage.dto';
import { OutfitsService } from './outfits.service';
export declare class OutfitsController {
    private readonly outfitsService;
    constructor(outfitsService: OutfitsService);
    create(user: any, dto: CreateOutfitDto): Promise<{
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
                photos: import("@prisma/client/runtime/client").JsonValue | null;
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
    findAll(user: any): import("@prisma/client").Prisma.PrismaPromise<({
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
                photos: import("@prisma/client/runtime/client").JsonValue | null;
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
    logUsage(user: any, id: string, dto: LogUsageDto): Promise<{
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
