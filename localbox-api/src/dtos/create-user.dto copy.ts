import { IsOptional } from 'class-validator';

export class UploadFileDto {
  @IsOptional()
  parentId: string;
}
