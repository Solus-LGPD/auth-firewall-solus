import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDTO{

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
}
