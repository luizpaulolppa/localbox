import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from 'src/services/user.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/configs/jwt-auth.guard';
import { bcryptConstants } from 'src/configs/constants';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const user = await this.userService.findBy({ email: createUserDto.email });
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.FORBIDDEN);
    }

    const passwordHash = await bcrypt.hash(
      createUserDto.password,
      bcryptConstants.salts,
    );

    this.userService.createUser({
      name: createUserDto.name,
      email: createUserDto.email,
      password: passwordHash,
    });

    res.status(HttpStatus.CREATED).send();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listUsers() {
    const users = await this.userService.listAll();
    return users;
  }
}
