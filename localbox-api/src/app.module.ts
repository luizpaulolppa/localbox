import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configs/constants';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './configs/jwt.strategy';
import { PrismaService } from './services/prisma.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [PrismaService, UserService, AuthService, JwtStrategy],
})
export class AppModule {}
