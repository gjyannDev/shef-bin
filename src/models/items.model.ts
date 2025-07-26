import mongoose from "mongoose";

const item_schema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});

export const Item = mongoose.model("Items", item_schema);
