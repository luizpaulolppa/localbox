import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { File, Prisma } from '@prisma/client';

export enum TypeOfFile {
  FOLDER = 'FOLDER',
  PDF = 'PDF',
  PNG = 'PNG',
}

@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {}

  async createNewFolder(
    name: string,
    userId: number,
    parentFileId?: number,
  ): Promise<File> {
    return this.prisma.file.create({
      data: { name, userId, parentFileId, isFolder: true },
    });
  }

  async findBy(
    userWhereUniqueInput: Prisma.FileWhereUniqueInput,
  ): Promise<File | null> {
    return this.prisma.file.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findByNameAndParentId(
    name: string,
    userId: number,
    parentFileId?: number,
  ): Promise<File[]> {
    return this.prisma.file.findMany({
      where: {
        name,
        userId,
        parentFileId,
      },
    });
  }

  async findByParentId(userId: number, parentFileId?: number): Promise<File[]> {
    return this.prisma.file.findMany({
      where: {
        userId,
        parentFileId,
      },
    });
  }

  async findByParentFileId(parentFileId: number): Promise<File[]> {
    return this.prisma.file.findMany({
      where: {
        parentFileId,
      },
    });
  }

  async delete(id: number): Promise<File> {
    return this.prisma.file.delete({
      where: {
        id,
      },
    });
  }
}
