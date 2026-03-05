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
exports.OutfitsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const create_outfit_dto_1 = require("./dto/create-outfit.dto");
const log_usage_dto_1 = require("./dto/log-usage.dto");
const outfits_service_1 = require("./outfits.service");
let OutfitsController = class OutfitsController {
    outfitsService;
    constructor(outfitsService) {
        this.outfitsService = outfitsService;
    }
    create(user, dto) {
        return this.outfitsService.create(user.userId, dto);
    }
    findAll(user) {
        return this.outfitsService.findAll(user.userId);
    }
    logUsage(user, id, dto) {
        return this.outfitsService.logUsage(user.userId, id, dto);
    }
};
exports.OutfitsController = OutfitsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_outfit_dto_1.CreateOutfitDto]),
    __metadata("design:returntype", void 0)
], OutfitsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OutfitsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id/usage'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, log_usage_dto_1.LogUsageDto]),
    __metadata("design:returntype", void 0)
], OutfitsController.prototype, "logUsage", null);
exports.OutfitsController = OutfitsController = __decorate([
    (0, swagger_1.ApiTags)('outfits'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('outfits'),
    __metadata("design:paramtypes", [outfits_service_1.OutfitsService])
], OutfitsController);
//# sourceMappingURL=outfits.controller.js.map