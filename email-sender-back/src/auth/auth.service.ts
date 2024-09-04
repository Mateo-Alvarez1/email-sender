import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt.interface';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const { password, ...properties } = createUserDto;
      const user = this.userRepository.create({
        ...properties,
        password: bcrypt.hashSync(password, 12),
      });

      await this.userRepository.save(user);

      return {
        ...user,
        token: this.createJwt({
          id: user.id,
          email: user.email,
          name: user.name,
          lastname: user.lastName,
        }),
      };
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;

      const user = await this.userRepository.findOne({
        where: { email },
        select: {
          email: true,
          password: true,
          id: true,
          name: true,
          lastName: true,
        },
      });

      if (!user) {
        throw new NotFoundException('Check Credentials (email)');
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new NotFoundException('Check Credentials (password)');
      }

      return {
        ...user,
        token: this.createJwt({
          id: user.id,
          email: user.email,
          name: user.name,
          lastname: user.lastName,
        }),
      };
    } catch (error) {
      this.handleErrors(error);
    }
  }

  private createJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  private handleErrors(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
  }
}
