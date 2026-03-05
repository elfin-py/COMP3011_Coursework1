"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const health_module_1 = require("./health/health.module");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const items_module_1 = require("./items/items.module");
const listings_module_1 = require("./listings/listings.module");
const matching_module_1 = require("./matching/matching.module");
const donations_module_1 = require("./donations/donations.module");
const analytics_module_1 = require("./analytics/analytics.module");
const climate_module_1 = require("./climate/climate.module");
const outfits_module_1 = require("./outfits/outfits.module");
const recommendation_module_1 = require("./recommendation/recommendation.module");
const trends_module_1 = require("./trends/trends.module");
const feedback_module_1 = require("./feedback/feedback.module");
const chat_module_1 = require("./chat/chat.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
                    transport: process.env.NODE_ENV === 'production'
                        ? undefined
                        : {
                            target: 'pino-pretty',
                            options: { singleLine: true, colorize: true },
                        },
                },
            }),
            prisma_module_1.PrismaModule,
            health_module_1.HealthModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            items_module_1.ItemsModule,
            listings_module_1.ListingsModule,
            matching_module_1.MatchingModule,
            donations_module_1.DonationsModule,
            analytics_module_1.AnalyticsModule,
            climate_module_1.ClimateModule,
            outfits_module_1.OutfitsModule,
            recommendation_module_1.RecommendationModule,
            trends_module_1.TrendsModule,
            feedback_module_1.FeedbackModule,
            chat_module_1.ChatModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map