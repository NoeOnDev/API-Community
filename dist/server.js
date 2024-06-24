"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ormConfig_1 = require("./config/ormConfig");
const env_1 = require("./config/env");
const app_1 = __importDefault(require("./app"));
const port = env_1.env.port;
ormConfig_1.AppDataSource.initialize().then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(`Error while connecting to the database: ${error}`);
});
