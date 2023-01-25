import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

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
}
