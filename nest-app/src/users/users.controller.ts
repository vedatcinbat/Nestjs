import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns user with id ${id}`;
  }

  @Post("register")
  create(@Body() createUserDto: CreateUserDto) {
    // The createUserDto object is validated by class-validator
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userData: any): string {
    return `This action updates user with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes user with id ${id}`;
  }
}
