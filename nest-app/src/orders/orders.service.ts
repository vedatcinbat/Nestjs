import { Inject, Injectable } from "@nestjs/common";
import { ProductsService } from "../products/products.service";

@Injectable()
export class OrdersService {
    constructor(private readonly productsService: ProductsService) {}

    createOrder(productId: number) {
        const product = this.productsService.getProductById(productId);
        if(!product) {
            return 'Product not available';
        }

        return 'Order created for product: ' + product.name;
    }

    getOrders() {
        return 'Orders';
    }
}