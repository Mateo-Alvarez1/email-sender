import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { validate as IsUUID } from 'uuid';
@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const user = this.clientRepository.create(createClientDto);
      await this.clientRepository.save(user);
      return user;
    } catch (e) {
      this.handleErrors(e);
    }
  }

  async findAll() {
    const users = await this.clientRepository.find();
    if (users.length === 0) {
      throw new BadRequestException('Not found clients in database');
    }
    return users;
  }

  async findOne(term: string) {
    let client: Client;
    if (IsUUID(term)) {
      client = await this.clientRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.clientRepository.createQueryBuilder();
      client = await queryBuilder
        .where(`UPPER(email) =:email`, {
          email: term.toUpperCase(),
        })
        .getOne();
    }

    if (!client) {
      throw new BadRequestException(`Client whit ${term} not found`);
    }
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const existingClient = await this.clientRepository.findOneBy({ id });
    if (!existingClient) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    try {
      const updatedClient = await this.clientRepository.preload({
        id: id,
        updatedAt: new Date(),
        ...updateClientDto,
      });

      await this.clientRepository.save(updatedClient);
      return updatedClient;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    const { affected } = await this.clientRepository.delete(id);

    if (affected === 0) {
      throw new BadRequestException(`Client whit ${id} not found`);
    }
    return 'Delete Successfully';
  }

  private handleErrors = (e: any) => {
    if ((e.code = '23505')) {
      throw new BadRequestException(e.detail);
    }
  };
}
