import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { jwtConstants } from 'src/configs/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findBy({ email });
    if (!user) return null;
    const isValid = await bcrypt.compare(pass, user.password);
    if (!isValid) return null;
    return user;
  }

  async login(id: number, email: string) {
    const payload = { email, sub: id };
    return {
      accessToken: this.jwtService.sign(payload),
      accessType: 'Bearer',
    };
  }

  async currentUser(accessToken: string): Promise<User> {
    try {
      const token = accessToken.replace('Bearer ', '');
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      const { sub: id } = payload;
      const user = await this.usersService.findBy({ id });
      if (!user) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      return user;
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
