export class User {
  private constructor(
    public readonly id: number,
    public readonly uuid: string,
    public readonly name: string,
    public readonly email: string,
    public readonly hashedPassword: string
  ) {}

  static create(
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string
  ): User {
    return new User(0, uuid, name, email, hashedPassword);
  }

  static reconstitute(
    id: number,
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string
  ): User {
    return new User(id, uuid, name, email, hashedPassword);
  }

  withId(id: number): User {
    return new User(id, this.uuid, this.name, this.email, this.hashedPassword);
  }
}
