import { Column, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  email?: string;

  @Column()
  email_verified: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  family_name: string;

  @Column()
  given_name: string;

  @Column({
    length: 2,
    nullable: true,
  })
  locale?: string;

  @Column()
  nickname: string;

  @Column()
  picture: string;

  @Column()
  sub: string;

  @UpdateDateColumn()
  updated_at: Date;
}
