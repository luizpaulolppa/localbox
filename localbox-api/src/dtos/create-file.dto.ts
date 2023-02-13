import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateFileDto {
  @IsNotEmpty({ message: 'Name is required' })
  @Length(1, 50, { message: 'Min 1 and max 50 caracteres' })
  name: string;

  @IsOptional()
  parentId: number;

  @IsOptional()
  isFolder: boolean;
}
