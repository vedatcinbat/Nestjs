import { Controller, Get } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {}

    @Get()
    getOrders() {
        return this.ordersService.getOrders();
    }

    @Get(":id")
    getOrderById() {
        return "Order by id";
    }

    @Get(":id/items")
    getOrderItems() {
        return "Order items by id";
    }
}