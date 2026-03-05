import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { readFileSync } from 'fs';
import * as path from 'path';

async function main() {
  const connectionString =
    process.env.DATABASE_URL ||
    'postgresql://cfx:cfxpass@localhost:5432/cfx?schema=public';
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  const file = path.join(__dirname, '..', 'data', 'trends.json');
  const raw = JSON.parse(readFileSync(file, 'utf-8'));
  const capturedAt = new Date(raw.capturedAt);

  await prisma.socialTrend.deleteMany({ where: { platform: raw.platform } });
  await prisma.socialTrend.createMany({
    data: raw.tags.map((t: any) => ({
      platform: raw.platform,
      tag: t.tag,
      volume: t.volume,
      capturedAt,
    })),
  });
  console.log('Ingested trends from data/trends.json');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
