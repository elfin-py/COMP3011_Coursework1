-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "insulation" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
ADD COLUMN     "styleTags" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "waterproof" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- CreateTable
CREATE TABLE "Outfit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occasion" TEXT,
    "styleTags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Outfit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutfitOnItems" (
    "outfitId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "OutfitOnItems_pkey" PRIMARY KEY ("outfitId","itemId")
);

-- CreateTable
CREATE TABLE "ClimateSnapshot" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validFor" TIMESTAMP(3),
    "temperatureC" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION,
    "windKph" DOUBLE PRECISION,
    "precipProb" DOUBLE PRECISION,
    "conditions" TEXT,

    CONSTRAINT "ClimateSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrendSignal" (
    "id" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "colourTrendScore" JSONB,
    "materialPopularity" JSONB,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrendSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialTrend" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "sentiment" DOUBLE PRECISION,
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialTrend_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutfitOnItems" ADD CONSTRAINT "OutfitOnItems_outfitId_fkey" FOREIGN KEY ("outfitId") REFERENCES "Outfit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutfitOnItems" ADD CONSTRAINT "OutfitOnItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
