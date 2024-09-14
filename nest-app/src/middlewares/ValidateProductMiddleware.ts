import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class ValidateProductMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const {name, price} = req.body;
    if(!name || !price) {
        throw new BadRequestException('Name and price are required');
    }

    next(); // Move to the next middleware or controller
  }
}