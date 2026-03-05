import { PrismaService } from '../prisma/prisma.service';
export declare class DonationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    routeItem(itemId: string): Promise<{
        donation: {
            id: string;
            createdAt: Date;
            status: string;
            itemId: string;
            allocatedKg: number;
            impactEstimate: number;
            recyclerId: string;
        };
        rationale: {
            recycler: string;
            distanceScore: number;
            impactScore: number;
            capacityScore: number;
            total: number;
        };
    }>;
}
