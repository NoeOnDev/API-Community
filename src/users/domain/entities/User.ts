import { UserUuid } from "../value-objects/UserUuid";
import { UserEmail } from "../value-objects/UserEmail";
import { UserPhone } from "../value-objects/UserPhone";

export class User {
  constructor(
    public id: string,
    public uuid: UserUuid,
    public name: string,
    public email: UserEmail,
    public password: string,
    public isEmailConfirmed: boolean,
    public isPhoneConfirmed: boolean,
    public phone?: UserPhone,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
