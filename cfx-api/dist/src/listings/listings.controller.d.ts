import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
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
    update(user: any, id: string, dto: UpdateListingDto): Promise<{
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
    remove(user: any, id: string): Promise<{
        deleted: boolean;
        id: string;
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
