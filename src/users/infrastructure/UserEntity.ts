import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "uuid", unique: true })
  uuid!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  hashedPassword!: string;

  @Column({ nullable: true })
  phone!: string | null;

  @Column({ default: false })
  isEmailVerified!: boolean;

  @Column({ default: false })
  isPhoneVerified!: boolean;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
