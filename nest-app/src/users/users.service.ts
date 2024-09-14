import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
    private users = [];

    getUsers() {
        return this.users;
    }

    getUserById(userId: number) {
        return this.users.find(user => user.id === userId);
    } 
    
    createUser(createUserDto: CreateUserDto) {
        this.users.push(createUserDto);
        return createUserDto;
    }
}