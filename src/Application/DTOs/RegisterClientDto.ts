import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class RegisterDto {

  @IsString()
  full_name: string;

  @IsEmail({}, { message: 'Invalid email message' })
  email: string;
  
  @IsString()
  @IsNumber()
  zip_code: number;

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




