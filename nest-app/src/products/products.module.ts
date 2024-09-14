import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [], // import other modules for using their services
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}