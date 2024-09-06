import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [ConfigModule, AuthModule],
})
export class MailModule {}
