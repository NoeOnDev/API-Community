export class User {
  private constructor(
    public readonly id: number,
    public readonly uuid: string,
    public readonly name: string,
    public readonly email: string,
    public readonly hashedPassword: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  static create(
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string
  ): User {
    const now = new Date();
    return new User(0, uuid, name, email, hashedPassword, now, now);
  }

  static reconstitute(
    id: number,
    uuid: string,
    name: string,
    email: string,
    hashedPassword: string,
    createdAt: Date,
    updatedAt: Date
  ): User {
    return new User(
      id,
      uuid,
      name,
      email,
      hashedPassword,
      createdAt,
      updatedAt
    );
  }

  withId(id: number): User {
    return new User(
      id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      this.updatedAt
    );
  }

  updateTimestamp(): User {
    return new User(
      this.id,
      this.uuid,
      this.name,
      this.email,
      this.hashedPassword,
      this.createdAt,
      new Date()
    );
  }
}
