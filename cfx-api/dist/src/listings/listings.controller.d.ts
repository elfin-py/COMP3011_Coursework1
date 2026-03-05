import { CreateListingDto } from './dto/create-listing.dto';
import { ListingsService } from './listings.service';
export declare class ListingsController {
    private readonly listingsService;
    constructor(listingsService: ListingsService);
    create(user: any, dto: CreateListingDto): Promise<{
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    findAll(): Promise<({
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
    })[]>;
    findOne(id: string): Promise<{
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        itemId: string;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
