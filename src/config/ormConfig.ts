import { DataSource } from "typeorm";
import { env } from "./env";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.db.host,
    port: Number(env.db.port),
    username: env.db.user,
    password: env.db.pass,
    database: env.db.name,
    synchronize: true,
    logging: false,
    entities: [User]
});