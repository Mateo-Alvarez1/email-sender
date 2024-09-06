import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsString, ValidateNested } from 'class-validator';

export class CreateMailDto {
  @IsArray()
  @IsEmail({}, { each: true })
  to: string[];

  @IsString()
  subject: string;

  @IsString()
  text: string;
}

export class RegisterDomainDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class CreateMailRequestDto {
  @ValidateNested()
  @Type(() => CreateMailDto)
  mail: CreateMailDto;

  @ValidateNested()
  @Type(() => RegisterDomainDto)
  domain: RegisterDomainDto;
}
