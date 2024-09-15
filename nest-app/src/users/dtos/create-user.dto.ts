import { IsString, IsEmail, MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsNumber()
    age: number;
}