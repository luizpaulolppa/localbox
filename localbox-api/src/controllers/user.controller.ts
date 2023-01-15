import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/dtos/create_user.dto';
import * as bcrypt from 'bcrypt';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.findBy({ email: createUserDto.email });
    console.log(user);
    if (user) {
      throw new HttpException('E-mail já existente', HttpStatus.FORBIDDEN);
    }

    const saltOrRounds = 10;
    const password = 'random_password';
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.userService.createUser({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
    });
  }
}
