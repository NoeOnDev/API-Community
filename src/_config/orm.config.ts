import { Sequelize } from "sequelize-typescript";
import { env } from "./env.config";

export const sequelize = new Sequelize({
  database: env.db.DB_NAME,
  dialect: "postgres",
  username: env.db.DB_USER,
  password: env.db.DB_PASSWORD,
  host: env.db.DB_HOST,
  port: env.db.DB_PORT,
  models: [],
  logging: false,
});
