import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.API_KEY);
  }
  async create(createMailDto: CreateMailDto) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: 'Mateo <onboarding@resend.dev>',
        to: createMailDto.to,
        subject: createMailDto.subject,
        html: createMailDto.content,
      });

      if (error) {
        console.error('Resend API error:', error);
        throw new Error(`Error sending email: ${JSON.stringify(error)}`);
      }

      return data;
    } catch (error) {
      console.error('Error sending email:', error.message);
      throw new Error('Failed to send email');
    }
  }
}
