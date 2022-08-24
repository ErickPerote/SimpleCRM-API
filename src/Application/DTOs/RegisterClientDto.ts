import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class RegisterDto {

  @IsString()
  full_name: string;

  @IsEmail({}, { message: 'Invalid email message' })
  email: string;

  @IsString()
  zip_code: string;

  @IsString()
  street: string;

  @IsString()
  district: string;

  @IsString()
  locality: string;

  @IsString()
  description: string;

  @IsString()
  phone: string;

}




