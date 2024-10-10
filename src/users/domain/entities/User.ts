export class User {
  constructor(
    public id: string,
    public uuid: string,
    public name: string,
    public email: string,
    public password: string,
    public isEmailConfirmed: boolean,
    public isPhoneConfirmed: boolean,
    public phone?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
