import { FeedbackService } from './feedback.service';
declare class FeedbackDto {
    targetId: string;
    rating: number;
    note?: string;
}
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    submit(user: any, dto: FeedbackDto): import("@prisma/client").Prisma.Prisma__FeedbackClient<{
        id: string;
        createdAt: Date;
        userId: string;
        targetType: import("@prisma/client").$Enums.TargetType;
        targetId: string;
        rating: number;
        note: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
export {};
