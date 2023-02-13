import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Param,
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
import { FolderService } from 'src/services/folder.service';
import { AuthService } from 'src/services/auth.service';

@Controller('/api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly folderService: FolderService,
    private readonly authService: AuthService,
  ) {}

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
}
