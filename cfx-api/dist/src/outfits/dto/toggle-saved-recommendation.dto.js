"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleSavedRecommendationDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SavedWeatherDto {
    temperatureC;
    precipProb;
    windKph;
    conditions;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SavedWeatherDto.prototype, "temperatureC", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SavedWeatherDto.prototype, "precipProb", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SavedWeatherDto.prototype, "windKph", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedWeatherDto.prototype, "conditions", void 0);
class SavedItemDto {
    id;
    material;
    sizeLabel;
    styleTags;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedItemDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedItemDto.prototype, "material", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedItemDto.prototype, "sizeLabel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SavedItemDto.prototype, "styleTags", void 0);
class SavedOutfitSnapshotDto {
    id;
    name;
    occasion;
    styleTags;
    items;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedOutfitSnapshotDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedOutfitSnapshotDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SavedOutfitSnapshotDto.prototype, "occasion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SavedOutfitSnapshotDto.prototype, "styleTags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SavedItemDto),
    __metadata("design:type", Array)
], SavedOutfitSnapshotDto.prototype, "items", void 0);
class ToggleSavedRecommendationDto {
    recommendedFor;
    location;
    weather;
    outfit;
}
exports.ToggleSavedRecommendationDto = ToggleSavedRecommendationDto;
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], ToggleSavedRecommendationDto.prototype, "recommendedFor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ToggleSavedRecommendationDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SavedWeatherDto),
    __metadata("design:type", SavedWeatherDto)
], ToggleSavedRecommendationDto.prototype, "weather", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SavedOutfitSnapshotDto),
    __metadata("design:type", SavedOutfitSnapshotDto)
], ToggleSavedRecommendationDto.prototype, "outfit", void 0);
//# sourceMappingURL=toggle-saved-recommendation.dto.js.map