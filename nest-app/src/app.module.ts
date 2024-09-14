import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PostsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
