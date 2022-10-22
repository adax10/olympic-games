import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.SERVER_PORT);
  app.setGlobalPrefix('api');

  const appName = 'Olympic Games';
  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appName)
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, { customSiteTitle: appName });

  await app.listen(port);
  const logger = app.get(Logger);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
