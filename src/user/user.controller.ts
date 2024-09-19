import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserRequest } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string): Promise<User | []> {
    return this.userService.findOneUser(+id);
  }

  @Post()
  create(@Body() user: CreateUserRequest): Promise<User> {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  removeUser(id: number): Promise<void> {
    return this.userService.removeUser(id);
  }
}
