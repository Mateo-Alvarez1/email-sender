import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/auth/entities/user.entity';
import { log } from 'node:console';

@Injectable()
export class MailService {
  private transporter: any;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'mateoalvarez384@gmail.com',
        pass: configService.get('EMAIL_PASSWORD'),
      },
    });
  }
  async create(user: User, createMailDto: CreateMailDto) {
    console.log(user.email);

    try {
      const info = await this.transporter.sendMail({
        from: `"${user.name} ${user.lastName}" ${user.email}`,
        to: createMailDto.to.join(', '),
        subject: createMailDto.subject,
        text: createMailDto.text,
      });
      return info;
    } catch (error) {
      console.error('Error al enviar correo:', error);
      throw error;
    }
  }
}
