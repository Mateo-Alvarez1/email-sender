import { IsArray, IsEmail, IsString } from 'class-validator';

export class CreateMailDto {
  @IsArray()
  @IsEmail({}, { each: true })
  to: string[];

  @IsString()
  subject: string;

  @IsString()
  content: string;
}
