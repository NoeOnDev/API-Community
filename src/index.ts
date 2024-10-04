import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import { Twilio } from "twilio";

config();

const app = express();
const port = process.env.PORT;

const twilio = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.post("/send-whatsapp", async (req, res) => {
  try {
    const { to, message } = req.body;
    const response = await twilio.messages.create({
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      body: message,
      to: `whatsapp:${to}`,
    });

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
