import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });

  const config = new DocumentBuilder()
    .setTitle('Circular Fashion Exchange API')
    .setDescription('OpenAPI export')
    .setVersion('0.2.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  mkdirSync('docs', { recursive: true });
  writeFileSync(join('docs', 'swagger.json'), JSON.stringify(document, null, 2));
  await app.close();
  // eslint-disable-next-line no-console
  console.log('Exported docs/swagger.json');
}

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
