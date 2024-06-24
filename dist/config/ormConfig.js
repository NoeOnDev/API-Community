"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const env_1 = require("./env");
const User_1 = require("../entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env_1.env.db.host,
    port: Number(env_1.env.db.port),
    username: env_1.env.db.user,
    password: env_1.env.db.pass,
    database: env_1.env.db.name,
    synchronize: true,
    logging: false,
    entities: [User_1.User]
});
