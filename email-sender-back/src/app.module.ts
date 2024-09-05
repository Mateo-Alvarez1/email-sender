import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
