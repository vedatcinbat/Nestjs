import { Injectable } from "@nestjs/common";
import { Product } from "./products.types";

@Injectable()
export class ProductsService {
    private products: Product[] = [{productId: 1, name: 'Product 1', price: 100}, {productId: 2, name: 'Product 2', price: 200}];

    getProducts() {
        return this.products;
    }

    getProductById(productId: number): Product {
        return this.products.find(product => product.productId === productId);
    }

    addProduct(product: Product): Product {
        this.products.push(product);
        return product;
    }
}