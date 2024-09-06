import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/auth/entities/user.entity';
import { CreateMailRequestDto } from './dto/mail-request.dto';
@Injectable()
export class MailService {
  private transporter: any;


  async create(user: User, createMailRequestDto: CreateMailRequestDto) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: createMailRequestDto.domain.email,
        pass: createMailRequestDto.domain.password,
      },
    });
    try {
      const info = await this.transporter.sendMail({
        from: `"${user.name} ${user.lastName}" ${user.email}`,
        to: createMailRequestDto.mail.to,
        subject: createMailRequestDto.mail.subject,
        text: createMailRequestDto.mail.text,
      });
      return info;
    } catch (error) {
      console.error('Error al enviar correo:', error);
      throw error;
    }
  }
}
