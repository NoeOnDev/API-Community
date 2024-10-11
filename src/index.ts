import express from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import { env } from "./_config/env.config";
import { connectWithRetry } from "./_helpers/dbConnection";
import userRoutes from "./users/infrastructure/userRoutes";

const app = express();
const port = env.port.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);

app.get("/", (_req, res) => {
  res.send("Welcome to the users API 🚀");
});

app.use('/api/v1', userRoutes);

connectWithRetry(10, 10000, () => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🚀`);
  });
});
