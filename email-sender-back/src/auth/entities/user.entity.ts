import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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
    nullable: false,
  })
  password: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    nullable: false,
    default: ['user'],
  })
  roles: string[];

  //   @OneToMany(() => Product, (product) => product.user, { cascade: true })
  //   product: Product;

  @BeforeInsert()
  cheksFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
}
