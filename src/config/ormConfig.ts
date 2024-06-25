import { DataSource } from "typeorm";
import { env } from "./env";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.db.host,
    port: Number(env.db.port),
    username: env.db.user,
    password: env.db.pass,
    database: env.db.name,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [User]
});