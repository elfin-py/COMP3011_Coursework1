"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.match.deleteMany();
    await prisma.listing.deleteMany();
    await prisma.donation.deleteMany();
    await prisma.item.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
    await prisma.recycler.deleteMany();
    const users = await prisma.$transaction(Array.from({ length: 5 }).map((_, i) => prisma.user.create({
        data: {
            username: `user${i + 1}`,
            passwordHash: 'seed-hash',
            profile: {
                create: {
                    cityLat: 53.8 + i * 0.01,
                    cityLon: -1.55 - i * 0.01,
                    styleTags: ['casual', 'street'],
                    sizes: { top: 'M', bottom: '32' },
                },
            },
        },
    })));
    const categories = [client_1.Category.TOP, client_1.Category.BOTTOM, client_1.Category.SHOES];
    const items = await prisma.$transaction(Array.from({ length: 15 }).map((_, i) => prisma.item.create({
        data: {
            ownerId: users[i % users.length].id,
            category: categories[i % categories.length],
            sizeLabel: i % 2 === 0 ? 'M' : 'L',
            material: i % 3 === 0 ? 'recycled cotton' : 'polyester',
            condition: 4,
            styleEmbedding: Array.from({ length: 8 }).map(() => Math.random()),
            insulation: Math.random(),
            waterproof: Math.random() * 0.5,
            styleTags: ['casual', i % 2 === 0 ? 'street' : 'smart'],
            status: client_1.ItemStatus.AVAILABLE,
            photos: {},
        },
    })));
    await prisma.listing.create({
        data: {
            itemId: items[0].id,
            intent: client_1.Intent.SWAP,
            availabilityStart: new Date(),
            availabilityEnd: new Date(Date.now() + 7 * 24 * 3600 * 1000),
        },
    });
    await prisma.outfit.create({
        data: {
            userId: users[0].id,
            name: 'Rainy day fit',
            occasion: 'commute',
            styleTags: ['casual'],
            items: {
                create: items.slice(0, 2).map((it) => ({ itemId: it.id })),
            },
        },
    });
    await prisma.climateSnapshot.createMany({
        data: [
            {
                location: 'Leeds',
                capturedAt: new Date(),
                validFor: new Date(),
                temperatureC: 12,
                humidity: 75,
                windKph: 10,
                precipProb: 60,
                conditions: 'light rain',
            },
            {
                location: 'Leeds',
                capturedAt: new Date(Date.now() - 6 * 3600 * 1000),
                validFor: new Date(Date.now() - 6 * 3600 * 1000),
                temperatureC: 8,
                humidity: 80,
                windKph: 15,
                precipProb: 40,
                conditions: 'cloudy',
            },
        ],
    });
    await prisma.recycler.createMany({
        data: [
            {
                name: 'EcoCycle North',
                materials: ['recycled cotton', 'polyester'],
                distanceKm: 5,
                capacityKg: 50,
                co2PerKg: 2.5,
            },
            {
                name: 'Urban Renew',
                materials: ['polyester'],
                distanceKm: 12,
                capacityKg: 20,
                co2PerKg: 1.4,
            },
        ],
    });
    await prisma.socialTrend.createMany({
        data: [
            { platform: 'synthetic', tag: 'puffer', volume: 3200 },
            { platform: 'synthetic', tag: 'cargo', volume: 2100 },
            { platform: 'synthetic', tag: 'emerald', volume: 900 },
            { platform: 'synthetic', tag: 'denim', volume: 2800 },
            { platform: 'synthetic', tag: 'suede', volume: 1200 },
        ],
    });
    console.log('Seeded users, items, listings, recyclers.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map