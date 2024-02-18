import { Column, Table, Model, DataType, Unique, AllowNull, IsEmail, Length, BeforeSave, Index } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table({ timestamps: true })
export class User extends Model {
    @AllowNull(false)
    @Column
    firstName: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @AllowNull(false)
    @Column(DataType.DATEONLY)
    birthday: Date;

    @Unique
    @Column
    phone: string;

    @Index
    @Unique
    @AllowNull(false)
    @Length({ min: 3, max: 20 })
    @Column
    username: string;

    @Index
    @Unique
    @AllowNull(false)
    @IsEmail
    @Column
    email: string;

    @AllowNull(false)
    @Length({ min: 8, max: 100 })
    @Column
    password: string;

    @BeforeSave
    static async hashPassword(user: User) {
        if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }

    async checkPassword(password: string) {
        return await bcrypt.compare(password, this.password);
    }
}