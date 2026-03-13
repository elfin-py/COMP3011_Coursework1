const { writeFileSync } = require('fs');
const { SwaggerModule, DocumentBuilder } = require('@nestjs/swagger');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('../dist/app.module');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Style Forecast API')
    .setDescription('Swagger export')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  writeFileSync('docs/swagger.json', JSON.stringify(doc, null, 2));
  await app.close();
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
