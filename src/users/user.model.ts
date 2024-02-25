import { Model, Column, Table, BeforeCreate } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    phone: string;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    password: string;

    @BeforeCreate
    static async hashingPassword(user:User) {
        const RoundSalt = 10;
        const salt  = await bcrypt.genSalt(RoundSalt);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    }
}