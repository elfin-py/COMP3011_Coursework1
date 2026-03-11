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
var TrendsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const trends_service_1 = require("./trends.service");
let TrendsController = class TrendsController {
    static { TrendsController_1 = this; }
    trendsService;
    constructor(trendsService) {
        this.trendsService = trendsService;
    }
    static ALLOWED_PROXY_HOSTS = ['pinimg.com', 'pinterest.com'];
    top(platform, limit = 20) {
        return this.trendsService.topTags(platform ?? '', Number(limit));
    }
    materials() {
        return this.trendsService.materialPopularity();
    }
    async pinterest(q) {
        const query = q?.trim();
        if (!query)
            return { images: [] };
        const images = await this.trendsService.fetchPinterestImages(query);
        return { images };
    }
    async google(q) {
        const query = q?.trim();
        if (!query)
            return { images: [] };
        const images = await this.trendsService.fetchGoogleImages(query);
        return { images };
    }
    async proxyPinterest(url, res) {
        const target = url?.trim();
        if (!target || target.length < 12) {
            throw new common_1.BadRequestException('Missing or invalid url');
        }
        let parsed;
        try {
            parsed = new URL(target);
        }
        catch {
            throw new common_1.BadRequestException('Missing or invalid url');
        }
        const hostname = parsed.hostname.toLowerCase();
        const isAllowedHost = TrendsController_1.ALLOWED_PROXY_HOSTS.some((host) => hostname === host || hostname.endsWith(`.${host}`));
        if (parsed.protocol !== 'https:' ||
            !isAllowedHost ||
            !/\.(jpe?g|png|webp)$/i.test(parsed.pathname)) {
            throw new common_1.BadRequestException('Missing or invalid url');
        }
        const upstream = await fetch(parsed, {
            signal: AbortSignal.timeout(5000),
        });
        if (!upstream.ok) {
            throw new common_1.BadRequestException(`Upstream failed: ${upstream.status}`);
        }
        const contentType = upstream.headers.get('content-type') || 'image/jpeg';
        const contentLength = Number(upstream.headers.get('content-length') || '0');
        if (!contentType.startsWith('image/')) {
            throw new common_1.BadRequestException('Upstream did not return an image');
        }
        if (contentLength > 5_000_000) {
            throw new common_1.BadRequestException('Image too large');
        }
        const buffer = Buffer.from(await upstream.arrayBuffer());
        res.setHeader('Content-Type', contentType);
        res.send(buffer);
    }
};
exports.TrendsController = TrendsController;
__decorate([
    (0, common_1.Get)('top'),
    __param(0, (0, common_1.Query)('platform')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TrendsController.prototype, "top", null);
__decorate([
    (0, common_1.Get)('materials'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrendsController.prototype, "materials", null);
__decorate([
    (0, common_1.Get)('pinterest'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrendsController.prototype, "pinterest", null);
__decorate([
    (0, common_1.Get)('google'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrendsController.prototype, "google", null);
__decorate([
    (0, common_1.Get)('pinterest/proxy'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TrendsController.prototype, "proxyPinterest", null);
exports.TrendsController = TrendsController = TrendsController_1 = __decorate([
    (0, swagger_1.ApiTags)('trends'),
    (0, common_1.Controller)('trends'),
    __metadata("design:paramtypes", [trends_service_1.TrendsService])
], TrendsController);
//# sourceMappingURL=trends.controller.js.map