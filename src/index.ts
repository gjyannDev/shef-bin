import dotenv from "dotenv";
import express from "express";
import methodOverride from "method-override";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import category_router from "./routers/category/category.router.js";
import homepage_router from "./routers/homepage.routers.js";
import inventory_router from "./routers/inventory/inventory.routers.js";
import items_router from "./routers/items/items.router.js";
import log_router from "./routers/recentActivity/log.routers.js";
import { connectToDatabase } from "./services/db/mongo.connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

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
app.use("/", log_router);
app.use("/inventory", inventory_router);

//Connecting to mongoDB
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Serving running on http://localhost:${PORT}`);
  });
});
