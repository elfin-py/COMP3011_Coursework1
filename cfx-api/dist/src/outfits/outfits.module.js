"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutfitsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const outfits_controller_1 = require("./outfits.controller");
const outfits_service_1 = require("./outfits.service");
const climate_module_1 = require("../climate/climate.module");
let OutfitsModule = class OutfitsModule {
};
exports.OutfitsModule = OutfitsModule;
exports.OutfitsModule = OutfitsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, climate_module_1.ClimateModule],
        controllers: [outfits_controller_1.OutfitsController],
        providers: [outfits_service_1.OutfitsService],
        exports: [outfits_service_1.OutfitsService],
    })
], OutfitsModule);
//# sourceMappingURL=outfits.module.js.map