import { BadRequestException, Injectable, PipeTransform,  } from "@nestjs/common";

@Injectable()
export class ProductIdValidationPipe implements PipeTransform {
    transform(value: string): number {
        const val = parseInt(value, 10);
        if(isNaN(val) || val < 1 || val > 10000) {
            throw new BadRequestException(`Invalid product id: ${value}`);
        }
        return val;
    }
}