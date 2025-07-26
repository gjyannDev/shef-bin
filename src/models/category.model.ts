import mongoose from "mongoose";

const category_schema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Name should be inputted"],
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", category_schema);
