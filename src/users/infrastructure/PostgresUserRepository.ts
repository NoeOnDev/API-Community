import { Pool } from "pg";
import { IUserRepository } from "../domain/IUserRepository";
import { User } from "../domain/User";

export class PostgresUserRepository implements IUserRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async save(user: User): Promise<User> {
    const query = `
      INSERT INTO users (uuid, name, email, hashed_password, created_at, updated_at, phone, is_email_verified, is_phone_verified)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id;
    `;
    const values = [
      user.uuid,
      user.name,
      user.email,
      user.hashedPassword,
      user.createdAt,
      user.updatedAt,
      user.phone,
      user.isEmailVerified,
      user.isPhoneVerified,
    ];
    const result = await this.pool.query(query, values);
    return user.withId(result.rows[0].id);
  }

  async findById(id: number): Promise<User | null> {
    const query = `SELECT * FROM users WHERE id = $1`;
    const result = await this.pool.query(query, [id]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return User.reconstitute(
      row.id,
      row.uuid,
      row.name,
      row.email,
      row.hashed_password,
      row.created_at,
      row.updated_at,
      row.phone,
      row.is_email_verified,
      row.is_phone_verified
    );
  }

  async findByUuid(uuid: string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE uuid = $1`;
    const result = await this.pool.query(query, [uuid]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return User.reconstitute(
      row.id,
      row.uuid,
      row.name,
      row.email,
      row.hashed_password,
      row.created_at,
      row.updated_at,
      row.phone,
      row.is_email_verified,
      row.is_phone_verified
    );
  }
}
