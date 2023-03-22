import { Injectable } from '@nestjs/common';
import { InsertUserDTO } from 'src/dtos/insert-user.dto';
import { User } from 'src/entities/user.entity';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {

    constructor(
        private readonly repository: PrismaService
    ){}
    
    async create(insertUserDTO: InsertUserDTO){
        return this.repository.userinfo.create({
            data: {
                ...insertUserDTO,
                creationdate: undefined
            },
            select: {
                email: true,
                firstname: true,
                creationdate: false,
                updatedate: false
            }
        });
    }

    async findByEmail(email: string) {
        return this.repository.userinfo.findFirst({
            where : {
                email: email
            },
            select: {
                email: true,
                firstname: true,
                creationdate: false,
                updatedate: false
            }
        });
    }
}
