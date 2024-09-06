import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { MailService } from './mail.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CreateMailRequestDto } from './dto/mail-request.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(
    @GetUser() user: User,
    @Body() createMailRequestDto: CreateMailRequestDto,
  ) {
    return this.mailService.create(user, createMailRequestDto);
  }
}
