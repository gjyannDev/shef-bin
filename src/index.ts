import dotenv from "dotenv";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import category_router from "./routers/category/category.router.js";
import items_router from "./routers/items/items.router.js";
import { connectToDatabase } from "./services/db/mongo.connection.js";
import homepage_router from "./routers/homepage.routers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "styles")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Homepage router
app.use("/", homepage_router);

//Other routers
app.use("/categories", category_router);
app.use("/items", items_router);

//Connecting to mongoDB
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Serving running on http://localhost:${PORT}`);
  });
});
