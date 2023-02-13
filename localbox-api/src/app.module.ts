import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configs/constants';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './configs/jwt.strategy';
import { PrismaService } from './services/prisma.service';
import { UserService } from './services/user.service';
import { FolderService } from './services/folder.service';
import { FileController } from './controllers/file.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [UserController, AuthController, FileController],
  providers: [
    PrismaService,
    UserService,
    AuthService,
    FolderService,
    JwtStrategy,
  ],
})
export class AppModule {}
