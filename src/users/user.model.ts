import { Column, Table, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column(DataType.DATEONLY)
    birthday: Date;

    @Unique
    @Column
    username: string;

    @Unique
    @Column
    email: string;

    @Column
    password: string;
}