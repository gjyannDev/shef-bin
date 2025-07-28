import mongoose from "mongoose";

const item_schema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "Item name is required"],
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"],
  },
  unit: {
    type: String,
    required: [true, "Unit is required"],
    enum: ["pcs", "pc", "kg", "g", "l", "ml", "packs", "bottles", "bunch"],
  },
  expirationDate: {
    type: Date,
    required: [true, "Expiration date is required"],
  },
  notes: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: ["in stock", "low stock", "expired", "out of stock"],
    default: "in stock",
  },
  formattedExpirationDate: {
    type: String,
    required: true,
  },
});

export const Item = mongoose.model("Items", item_schema);
