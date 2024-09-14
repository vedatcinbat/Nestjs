import {Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.types';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createProduct(@Body() product: Product) {
        const createdProduct = this.productsService.addProduct(product);
        return { message: `Post created : ${createdProduct}` };
    }

    @Get(':id')
    getProduct(@Param('id') id: number) {
        const product = this.productsService.getProductById(id);

        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }

        return product;
    }
}