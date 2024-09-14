import { Module } from "@nestjs/common"
import { BankController } from "./bank.controller";

@Module({
    imports: [],
    controllers: [BankController],
    providers: []
})
export class BankModule {}