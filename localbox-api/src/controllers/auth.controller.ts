import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/services/auth.service';
import { AuthDto } from 'src/dtos/auth.dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async auth(@Res() res: Response, @Body() credentials: AuthDto) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.authService.login(user.id, user.email);

    res.status(HttpStatus.OK).send(accessToken);
  }
}
