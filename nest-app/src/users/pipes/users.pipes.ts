import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform {
    transform(value: string): number {
        const val = parseInt(value, 10);
        if(isNaN(val)) {
            throw new BadRequestException(`${value} is not an integer`);
        }
        return val;
    }
}