import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the middleware to the entire application
  app.use(new LoggerMiddleware().use)

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  
  await app.listen(3000);
}
bootstrap();
