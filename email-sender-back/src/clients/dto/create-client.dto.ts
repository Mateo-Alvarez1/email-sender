import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @MinLength(1)
  lastName: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  phone: string;
  @IsString()
  @IsOptional()
  address: string;
  @IsDateString()
  @IsOptional()
  createdAt: string;
  @IsDateString()
  @IsOptional()
  updatedAt: string;
}
