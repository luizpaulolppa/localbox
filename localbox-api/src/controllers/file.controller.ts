import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
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
}
