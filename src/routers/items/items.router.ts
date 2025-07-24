import { Router } from "express";
import { getItemAddForm } from "../../controllers/items/items.controller.js";

const items_router = Router();

items_router.get("/items/add", getItemAddForm);

export default items_router;
