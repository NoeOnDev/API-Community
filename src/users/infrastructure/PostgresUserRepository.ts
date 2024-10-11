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
      INSERT INTO users (uuid, name, email)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;
    const values = [user.uuid, user.name, user.email];
    const result = await this.pool.query(query, values);
    return user.withId(result.rows[0].id);
  }

  async findById(id: number): Promise<User | null> {
    const query = `SELECT * FROM users WHERE id = $1`;
    const result = await this.pool.query(query, [id]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return User.reconstitute(row.id, row.uuid, row.name, row.email);
  }

  async findByUuid(uuid: string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE uuid = $1`;
    const result = await this.pool.query(query, [uuid]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return User.reconstitute(row.id, row.uuid, row.name, row.email);
  }

  async delete(id: number): Promise<void> {
    const query = `DELETE FROM users WHERE id = $1`;
    await this.pool.query(query, [id]);
  }
}
