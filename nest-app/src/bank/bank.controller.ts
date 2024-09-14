import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

@Controller('bank')
export class BankController {
  private balance = 1000;

  @Post('withdraw')
  withdraw(@Body() amount: number) {
    if (amount > this.balance) {
      throw new BadRequestException('Insufficient funds');
    }
    this.balance -= amount;
    return { message: 'Withdrawal successful', balance: this.balance };
  }
}
