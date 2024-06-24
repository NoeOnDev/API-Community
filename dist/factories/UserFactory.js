"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const express_1 = require("express");
const UserRepository_1 = require("../repositories/UserRepository");
const UserService_1 = require("../services/UserService");
const UserController_1 = require("../controllers/UserController");
class UserFactory {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
        this.userService = new UserService_1.UserService(this.userRepository);
        this.userController = new UserController_1.UserController(this.userService);
    }
    getRouter() {
        const router = (0, express_1.Router)();
        router.post("/", this.userController.createUser);
        router.get("/:id", this.userController.getUserById);
        return router;
    }
}
exports.UserFactory = UserFactory;
