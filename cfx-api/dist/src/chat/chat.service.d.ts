import { JwtService } from '@nestjs/jwt';
import { ClimateService } from '../climate/climate.service';
import { RecommendationService } from '../recommendation/recommendation.service';
import { ChatRecommendationDto } from './dto/chat-recommendation.dto';
type ExtractedPrefs = {
    occasion?: string;
    activity?: string;
    styleTags?: string[];
    avoidTags?: string[];
    preferences?: string[];
};
export declare class ChatService {
    private readonly recommendationService;
    private readonly jwtService;
    private readonly climateService;
    private readonly logger;
    constructor(recommendationService: RecommendationService, jwtService: JwtService, climateService: ClimateService);
    recommendFromChat(dto: ChatRecommendationDto, authHeader?: string): Promise<{
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
        interpretedPreferences: ExtractedPrefs;
        message: string;
    }>;
    private cleanUserMessage;
    private tryExtractUserId;
    private extractPreferences;
    private ruleExtract;
    private buildNarrative;
    private styleDirection;
    private generateAssistantReply;
    private weatherStyleGuidance;
}
export {};
