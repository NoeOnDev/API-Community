"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const env_1 = require("./env");
exports.pool = new pg_1.Pool({
    host: env_1.env.database.host,
    port: Number(env_1.env.database.port),
    database: env_1.env.database.name,
    user: env_1.env.database.user,
    password: env_1.env.database.password,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
