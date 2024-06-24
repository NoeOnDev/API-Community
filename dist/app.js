"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserFactory_1 = require("./factories/UserFactory");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userFactory = new UserFactory_1.UserFactory();
app.use('/api/users', userFactory.getRouter());
exports.default = app;
