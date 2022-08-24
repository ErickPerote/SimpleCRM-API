import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class AuthenticationDto {

  @IsEmail({}, { message: 'Invalid email message' })
  email: string;

  @IsString()
  password: string;

}