import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HELLO World");
});

app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
