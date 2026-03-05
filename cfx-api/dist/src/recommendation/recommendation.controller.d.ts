import { RecommendationService } from './recommendation.service';
export declare class RecommendationController {
    private readonly service;
    constructor(service: RecommendationService);
    outfit(req: any, location: string, datetime?: string): Promise<{
        outfit: {
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
        };
        score: {
            total: number;
            items: {
                itemId: any;
                tempScore: number;
                precipPenalty: number;
                windPenalty: number;
                protection: number;
                trendBoost: number;
                userBoost: number;
                total: number;
            }[];
        };
        customBoost: number;
    }>;
}
