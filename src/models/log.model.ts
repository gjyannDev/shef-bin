import mongoose from "mongoose";

const log_schema = new mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.ObjectId,
    },
    action: {
      type: String,
      enum: ["add", "updated", "delete"],
      required: true,
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Log = mongoose.model("activity_logs", log_schema);
