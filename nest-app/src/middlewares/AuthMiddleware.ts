import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        if(!authHeader || authHeader !== 'Bearer valid-token') {
            throw new UnauthorizedException('Invalid token');
        }

        next(); // Move to the next middleware or controller
    }
}