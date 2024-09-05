import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: false,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  lastName: string;

  @Column('text', {
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('text', {
    nullable: true,
  })
  address: string;

  @Column('text', {
    nullable: true,
  })
  phone: string;
  @Column('date', {
    default: new Date(),
  })
  createdAt: Date;
  @Column('date', {
    nullable: true,
  })
  updatedAt: Date;
}
