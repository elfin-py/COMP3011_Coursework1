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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const climate_service_1 = require("./climate.service");
const climate_dto_1 = require("./climate.dto");
let ClimateController = class ClimateController {
    climateService;
    constructor(climateService) {
        this.climateService = climateService;
    }
    create(dto) {
        return this.climateService.create(dto);
    }
    latest(location, datetime, tz, forceLive) {
        return this.climateService.latest(location, datetime, tz, forceLive === 'true');
    }
    localNow(location) {
        return this.climateService.localNow(location);
    }
};
exports.ClimateController = ClimateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [climate_dto_1.CreateClimateDto]),
    __metadata("design:returntype", void 0)
], ClimateController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('latest'),
    __param(0, (0, common_1.Query)('location')),
    __param(1, (0, common_1.Query)('datetime')),
    __param(2, (0, common_1.Query)('tz')),
    __param(3, (0, common_1.Query)('force_live')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ClimateController.prototype, "latest", null);
__decorate([
    (0, common_1.Post)('local-now'),
    __param(0, (0, common_1.Query)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClimateController.prototype, "localNow", null);
exports.ClimateController = ClimateController = __decorate([
    (0, swagger_1.ApiTags)('climate'),
    (0, common_1.Controller)('climate'),
    __metadata("design:paramtypes", [climate_service_1.ClimateService])
], ClimateController);
//# sourceMappingURL=climate.controller.js.map