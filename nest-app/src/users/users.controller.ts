import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns user with id ${id}`;
  }

  @Post()
  create(@Body() userData: {name: string; age: number}): string {
    return `User ${userData.name} is created with age ${userData.age}`;
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
