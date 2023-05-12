import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail, IsNumberString, isNumber } from 'class-validator';

export class RegisterDto {

  @IsString()
  full_name: string;

  @IsEmail({}, { message: 'Invalid email message' })
  email: string;
  
  @Type(() => Number) 
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

export class clientParams {

  @IsOptional()
  readonly id: number;

  @IsOptional()
  readonly full_name: string;

  @IsOptional()
  readonly email: string;

  @IsOptional()
  readonly zip_code: number;

  @IsOptional()
  readonly street: string;

  @IsOptional()
  readonly district: string;

  @IsOptional()
  readonly locality: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly phone: number;

  @IsOptional()
  @IsNumberString()
  readonly limit: number;

  @IsOptional()
  @IsNumberString()
  readonly page: number;
}




