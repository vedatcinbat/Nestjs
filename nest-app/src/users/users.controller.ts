import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Handle GET requests to /users
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  // Handle GET requests to /users/:id
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns user with id ${id}`;
  }

  // Handle POST requests to /users
  @Post()
  create(@Body() userData: any): string {
    return 'This action adds a new user';
  }

  // Handle PUT requests to /users/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() userData: any): string {
    return `This action updates user with id ${id}`;
  }

  // Handle DELETE requests to /users/:id
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes user with id ${id}`;
  }
}
