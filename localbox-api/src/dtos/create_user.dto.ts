import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome deve ser preenchido!' })
  @Length(5, 100, { message: 'Nome deve ter no mínimo 5 a 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'E-mail deve ser preenchido!' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha deve ser preenchida!' })
  @Length(8, 100, { message: 'Senha deve ter no mínimo 8 a 100 caracteres' })
  password: string;
}
