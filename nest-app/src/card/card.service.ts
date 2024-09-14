import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    // Connect to the database
    // Add your code here
  private balance = 1000;
  private transaction = [
    {
      transactionId: 1,
      amount: 100,
      type: 'credit',
    },
  ];

  getBalance() {
    return {
      message: 'Balance fetched successfully',
      balance: this.balance,
    };
  }

    getTransactions() {
        return this.transaction;
    }
}
