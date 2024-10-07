class User {
  constructor(
    public id: number,
    public uuid: string,
    public name: string,
    public email: string,
    public password: string,
    public phone?: string,
    public isEmailVerified: boolean = false,
    public isPhoneVerified: boolean = false,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}
