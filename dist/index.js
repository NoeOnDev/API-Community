"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const verbRoutes_1 = __importDefault(require("./routes/verbRoutes"));
const env_1 = require("./config/env");
const app = (0, express_1.default)();
const port = env_1.env.port;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', verbRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
