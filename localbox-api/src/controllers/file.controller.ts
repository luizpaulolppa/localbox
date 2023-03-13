import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';
import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/configs/jwt-auth.guard';
import { CreateFileDto } from 'src/dtos/create-file.dto';
import { AuthService } from 'src/services/auth.service';
import { FolderService } from 'src/services/folder.service';

@Controller('/api/files')
export class FileController {
  constructor(
    private readonly folderService: FolderService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async create(
    @Headers('Authorization') authorization,
    @Body() dto: CreateFileDto,
  ) {
    const { name, isFolder, parentId } = dto;
    const currentUser = await this.authService.currentUser(authorization);
    const userId = currentUser.id;

    if (!isFolder) {
      throw new HttpException(
        'Can not create other type of file',
        HttpStatus.FORBIDDEN,
      );
    }

    const files = await this.folderService.findByNameAndParentId(
      name,
      userId,
      parentId,
    );

    const hasFileWithTheSameName = !!files.find((f) => f.name.includes(name));
    if (hasFileWithTheSameName) {
      throw new HttpException('Folder already exists', HttpStatus.FORBIDDEN);
    }

    return await this.folderService.createNewFolder(name, userId, parentId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async listFiles(
    @Headers('Authorization') authorization,
    @Query() query: { parentId: number },
  ) {
    const currentUser = await this.authService.currentUser(authorization);
    const userId = currentUser.id;
    const parentId = query.parentId ? Number(query.parentId) : null;
    return await this.folderService.findByParentId(userId, parentId);
  }

  @Post('/upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Headers('Authorization') authorization,
    @UploadedFile(new ParseFilePipe({ validators: [] }))
    file: Express.Multer.File,
  ) {
    console.log(file);
    const { originalname, mimetype } = file;
    const keyFile = randomUUID();
    const pathName = path.resolve(__dirname, '..', '..', 'files', keyFile);
    await fs.writeFileSync(pathName, file.buffer);
    return { ok: true };
  }
}
