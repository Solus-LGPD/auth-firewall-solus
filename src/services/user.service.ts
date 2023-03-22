import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from 'src/entities/user.entity';
import { ConflictError } from 'src/errors/ConflictError';
import { UserMapper } from 'src/mappers/create-to-insert.mapper';

@Injectable()
export class UserService {
    
    constructor(
        private readonly repository: UserRepository
    ){}

    public async create(createUserDTO: CreateUserDTO){
        const user = await this.repository.findByEmail(createUserDTO.email);

        if(user){
            throw new ConflictError();
        }

        const insertUserDTO = UserMapper.createToInsertMapper(createUserDTO);

        return this.repository.create(insertUserDTO);
    }
}
