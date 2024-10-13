import { Schema, model, Document } from "mongoose";

interface NotificationTokenDocument extends Document {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
}

const NotificationTokenSchema = new Schema<NotificationTokenDocument>({
  id: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

export const NotificationTokenModel = model<NotificationTokenDocument>(
  "NotificationToken",
  NotificationTokenSchema
);
