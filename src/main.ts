import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura Swagger
  const config = new DocumentBuilder()
    .setTitle('Dream Journal API')
    .setDescription('API para el proyecto de diario de sueños')
    .setVersion('1.0')
    .addTag('dreams')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3005);
}
bootstrap();
