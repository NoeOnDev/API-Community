import { Repository } from "typeorm";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";
import { UserEntity } from "./UserEntity";

export class TypeORMUserRepository implements IUserRepository {
  private repository: Repository<UserEntity>;

  constructor(repository: Repository<UserEntity>) {
    this.repository = repository;
  }

  private mapToDomain(userEntity: UserEntity): User {
    return User.reconstitute(
      userEntity.id,
      userEntity.uuid,
      userEntity.name,
      userEntity.email,
      userEntity.hashedPassword,
      userEntity.createdAt,
      userEntity.updatedAt,
      userEntity.phone,
      userEntity.isEmailVerified,
      userEntity.isPhoneVerified
    );
  }

  private mapToEntity(user: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.uuid = user.uuid;
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.hashedPassword = user.hashedPassword;
    userEntity.phone = user.phone;
    userEntity.isEmailVerified = user.isEmailVerified;
    userEntity.isPhoneVerified = user.isPhoneVerified;
    userEntity.createdAt = user.createdAt;
    userEntity.updatedAt = user.updatedAt;
    return userEntity;
  }

  async save(user: User): Promise<User> {
    const userEntity = this.mapToEntity(user);
    const savedUserEntity = await this.repository.save(userEntity);
    return this.mapToDomain(savedUserEntity);
  }

  async findById(id: number): Promise<User | null> {
    const userEntity = await this.repository.findOne({ where: { id } });
    return userEntity ? this.mapToDomain(userEntity) : null;
  }

  async findByUuid(uuid: string): Promise<User | null> {
    const userEntity = await this.repository.findOne({ where: { uuid } });
    return userEntity ? this.mapToDomain(userEntity) : null;
  }
}
