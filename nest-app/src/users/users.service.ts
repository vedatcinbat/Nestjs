import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    getUsers() {
        return this.userRepository.find();
    }

    getUserById(userId: number) {
        const user = this.userRepository.findOne({where: {id: userId}});
        if (!user) {
            return [];
        }

        return user;
    } 
    
    createUser(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    deleteUser(userId: number) {
        return this.userRepository.delete(userId);
    }
}