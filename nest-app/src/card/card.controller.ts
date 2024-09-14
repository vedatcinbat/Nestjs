import { Controller, Get } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
    // Add your code here
    constructor (
        private readonly cardService: CardService
    ) {}

    @Get("balance")
    getBalance() {
        const balance = this.cardService.getBalance();
        return balance;
    }
}
