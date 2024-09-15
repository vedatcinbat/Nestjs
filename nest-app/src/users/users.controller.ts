import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  findAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: number): Promise<User> | any[] {
    return this.userService.getUserById(id);
  }

  @Post("register")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
