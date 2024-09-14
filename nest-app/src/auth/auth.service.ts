import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(userId: number) {
        return 'User logged in with id: ' + userId;
    }

    logout(userId: number) {
        return 'User logged out with id: ' + userId;
    }
}
