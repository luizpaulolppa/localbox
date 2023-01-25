import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'E-mail deve ser preenchido!' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha deve ser preenchida!' })
  @Length(8, 100, { message: 'Senha deve ter no mínimo 8 a 100 caracteres' })
  password: string;
}
