declare class SavedWeatherDto {
    temperatureC?: number;
    precipProb?: number;
    windKph?: number;
    conditions?: string;
}
declare class SavedItemDto {
    id: string;
    material?: string;
    sizeLabel?: string;
    styleTags?: string[];
}
declare class SavedOutfitSnapshotDto {
    id?: string;
    name: string;
    occasion?: string;
    styleTags?: string[];
    imageUrls?: string[];
    styleBlurb?: string;
    items?: SavedItemDto[];
}
export declare class ToggleSavedRecommendationDto {
    recommendedFor: string;
    location: string;
    weather: SavedWeatherDto;
    outfit: SavedOutfitSnapshotDto;
}
export {};
