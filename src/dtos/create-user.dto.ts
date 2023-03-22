import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    mobilephone: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
