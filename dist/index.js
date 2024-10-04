"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
const twilio_1 = require("twilio");
const crypto_1 = __importDefault(require("crypto"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT;
const twilio = new twilio_1.Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.post("/send-verification-code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { to } = req.body;
        const verificationCode = crypto_1.default.randomInt(100000, 999999).toString();
        const response = yield twilio.messages.create({
            from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
            body: `Tu código de verificación es: ${verificationCode}`,
            to: `whatsapp:${to}`,
        });
        res.json({ message: "Código de verificación enviado", response });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
