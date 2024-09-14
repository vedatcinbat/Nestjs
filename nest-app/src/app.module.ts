import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [PostsModule, ProductsModule, AuthModule, UsersModule, BankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
