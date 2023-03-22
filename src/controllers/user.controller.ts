import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getHello(): string {
    return "Hello";
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDTO){
    return this.service.create(createUserDto);
  }
}
