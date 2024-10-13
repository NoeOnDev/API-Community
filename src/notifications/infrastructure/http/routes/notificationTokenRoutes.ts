import { Router } from "express";
import { notificationTokenController } from "../../dependencyInjection";

const router = Router();

router.post("/tokens", (req, res) =>
  notificationTokenController.createToken(req, res)
);

export default router;
