import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the middleware to the entire application
  app.use(new LoggerMiddleware().use)
  
  await app.listen(3000);
}
bootstrap();
