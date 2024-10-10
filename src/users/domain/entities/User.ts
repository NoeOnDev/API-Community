import { UserUuid } from "../value-objects/UserUuid";
import { UserEmail } from "../value-objects/UserEmail";
import { UserPassword } from "../value-objects/UserPassword";
import { UserPhone } from "../value-objects/UserPhone";

export class User {
  constructor(
    public id: string,
    public uuid: UserUuid,
    public name: string,
    public email: UserEmail,
    public password: UserPassword,
    public isEmailConfirmed: boolean,
    public isPhoneConfirmed: boolean,
    public phone?: UserPhone,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
