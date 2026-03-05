import { ChatRecommendationDto } from './dto/chat-recommendation.dto';
import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    recommendation(dto: ChatRecommendationDto, authorization?: string): Promise<{
        recommendation: {
            outfit: {
                items: ({
                    item: {
                        id: string;
                        styleTags: string[];
                        createdAt: Date;
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
                        updatedAt: Date;
                    };
                } & {
                    outfitId: string;
                    itemId: string;
                })[];
            } & {
                id: string;
                userId: string;
                name: string;
                occasion: string | null;
                styleTags: string[];
                createdAt: Date;
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
        };
        interpretedPreferences: {
            occasion?: string;
            activity?: string;
            styleTags?: string[];
            avoidTags?: string[];
            preferences?: string[];
        };
        message: string;
    }>;
}
