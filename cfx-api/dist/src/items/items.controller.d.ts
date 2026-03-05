import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(user: any, dto: CreateItemDto): import("@prisma/client").Prisma.Prisma__ItemClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findOne(id: string): Promise<{
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
    }>;
}
