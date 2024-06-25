"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserRepository_1 = require("../repositories/UserRepository");
const UserService_1 = require("../services/UserService");
const HashService_1 = require("../services/HashService");
tsyringe_1.container.register("IUserRepository", {
    useClass: UserRepository_1.UserRepository
});
tsyringe_1.container.register("UserService", {
    useClass: UserService_1.UserService
});
tsyringe_1.container.registerSingleton("HashService", HashService_1.HashService);
