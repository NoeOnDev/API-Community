import { Pool } from 'pg';
import { env } from './env';

export const pool = new Pool({
    host: env.database.host,
    port: Number(env.database.port),
    database: env.database.name,
    user: env.database.user,
    password: env.database.password,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});