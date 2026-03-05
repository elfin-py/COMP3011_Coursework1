import { PrismaService } from '../prisma/prisma.service';
export declare class FeedbackService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    submit(userId: string, targetId: string, rating: number, note?: string): import("@prisma/client").Prisma.Prisma__FeedbackClient<{
        id: string;
        createdAt: Date;
        userId: string;
        targetType: import("@prisma/client").$Enums.TargetType;
        targetId: string;
        rating: number;
        note: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    userAverage(userId: string): Promise<{
        avg: number | null;
        count: number;
    }>;
}
