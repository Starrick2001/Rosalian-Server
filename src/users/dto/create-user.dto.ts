import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UsersDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsBoolean()
  email_verified: boolean;

  @IsString()
  family_name: string;

  @IsString()
  given_name: string;

  @IsString()
  locale: string;

  @IsString()
  nickname: string;

  @IsString()
  picture: string;

  @IsString()
  sub: string;
}
