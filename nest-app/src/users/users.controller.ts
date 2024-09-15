import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { ParseIntPipe } from './pipes/users.pipes';
import { AuthGuard } from './guards/users.guards';
import { LoggingInterceptor, TransformResponseInterceptor } from './interceptors/users.interceptors';

@Controller('users')
@UseInterceptors(TransformResponseInterceptor)
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  @UseInterceptors(LoggingInterceptor)
  findOneUser(@Param('id', ParseIntPipe) id: number): Promise<User> | any[] {
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
