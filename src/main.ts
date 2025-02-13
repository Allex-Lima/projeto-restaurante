import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  console.log('DB_HOST: ', process.env.DB_HOST);
  console.log('DB_PORT: ', process.env.DB_PORT);
  console.log('DB_NAME: ', process.env.DB_NAME);
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.DB_PORT ?? 3000);
}
bootstrap();
