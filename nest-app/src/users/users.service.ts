import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [{id: 1, name: 'John'}, {id: 2, name: 'Doe'}];

    getUsers() {
        return this.users;
    }

    getUserById(userId: number) {
        return this.users.find(user => user.id === userId);
    }   
}