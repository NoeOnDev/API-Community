import { Model, Column, Table } from 'sequelize-typescript';

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
}
