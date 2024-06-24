"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const ormConfig_1 = require("./config/ormConfig");
const env_1 = require("./config/env");
const app = (0, express_1.default)();
const port = env_1.env.port;
ormConfig_1.AppDataSource.initialize().then(() => {
    console.log('Database connected');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
