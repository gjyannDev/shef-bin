import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || "";

export async function connectToDatabase() {
  try {
    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }

    console.log('Attempting to connect to MongoDB...'); // Add logging
    await mongoose.connect(DATABASE_URL);
    console.log("MongoDB connected successfully at:", DATABASE_URL);

    // Test the connection
    await mongoose.connection.db?.admin().ping();
    console.log('Database ping successful');

  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}
