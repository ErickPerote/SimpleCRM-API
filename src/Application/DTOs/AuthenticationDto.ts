import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class AuthenticationDto {

  @IsEmail({}, { message: 'Invalid email message' })
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

}

export class ResponseAuthDto {
  @ApiProperty()
  access_token: string;
}