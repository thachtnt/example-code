import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('account')
export class AccountEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;
}
