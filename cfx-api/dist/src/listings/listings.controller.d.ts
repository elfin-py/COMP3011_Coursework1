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
            insulation: number;
            waterproof: number;
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
        itemId: string;
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
            insulation: number;
            waterproof: number;
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
        itemId: string;
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
            insulation: number;
            waterproof: number;
            status: import("@prisma/client").$Enums.ItemStatus;
            photos: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intent: import("@prisma/client").$Enums.Intent;
        availabilityStart: Date | null;
        availabilityEnd: Date | null;
        rentalTerms: import("@prisma/client/runtime/client").JsonValue | null;
        itemId: string;
    }>;
}
