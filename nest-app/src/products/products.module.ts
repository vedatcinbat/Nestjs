import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])], // import other modules for using their services
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}