import {IsString, IsEmail, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateUserRequest {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsNumber()
    readonly age: number;

    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}