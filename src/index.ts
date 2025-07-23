import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

// const __filename = fileURLToPath(import.meta.url)

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Serving running on https://localhost:${PORT}`);
});
