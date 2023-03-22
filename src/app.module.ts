import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { PrismaService } from './database/prisma.service';
import { UserRepository } from './database/repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
})
export class AppModule {}
