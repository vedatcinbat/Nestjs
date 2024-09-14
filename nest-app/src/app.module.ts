import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BankModule } from './bank/bank.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';
import { UsersController } from './users/users.controller';
import { ProductsController } from './products/products.controller';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    CardModule,
    PostsModule,
    ProductsModule,
    AuthModule,
    UsersModule,
    BankModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/* export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('products');
  }
} */
