import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';
import { Exclude,Expose, Type } from 'class-transformer';

export class DeleteClientDto {

  @Type(() => Number) 
  @IsNumber()
  id: number;

}