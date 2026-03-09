CREATE TABLE "SavedRecommendation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "outfitId" TEXT,
    "outfitName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "recommendedFor" TIMESTAMP(3) NOT NULL,
    "weatherSummary" JSONB NOT NULL,
    "outfitSnapshot" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedRecommendation_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "SavedRecommendation_userId_outfitId_location_recommendedFor_key"
ON "SavedRecommendation"("userId", "outfitId", "location", "recommendedFor");

ALTER TABLE "SavedRecommendation"
ADD CONSTRAINT "SavedRecommendation_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "SavedRecommendation"
ADD CONSTRAINT "SavedRecommendation_outfitId_fkey"
FOREIGN KEY ("outfitId") REFERENCES "Outfit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
