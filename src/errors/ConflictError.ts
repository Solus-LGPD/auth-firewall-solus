import { HttpException, HttpStatus } from "@nestjs/common";

export class ConflictError extends HttpException{
    constructor(){
        super("Este e-mail já foi cadastrado!", HttpStatus.CONFLICT);
    }
}