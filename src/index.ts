import dotenv from "dotenv";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import category_router from "./routers/category/category.router.js";
import items_router from "./routers/items/items.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "styles")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", category_router)
app.use("/", items_router)

app.listen(PORT, () => {
  console.log(`Serving running on http://localhost:${PORT}`);
});
