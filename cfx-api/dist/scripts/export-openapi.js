"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("../src/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: false });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Circular Fashion Exchange API')
        .setDescription('OpenAPI export')
        .setVersion('0.2.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    (0, fs_1.mkdirSync)('docs', { recursive: true });
    (0, fs_1.writeFileSync)((0, path_1.join)('docs', 'swagger.json'), JSON.stringify(document, null, 2));
    await app.close();
    console.log('Exported docs/swagger.json');
}
bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=export-openapi.js.map