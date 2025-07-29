import { Router } from "express";
import {
  addNewItem,
  getItemAddForm,
} from "../../controllers/items/items.controller.js";

const items_router = Router();

items_router.get("/add", getItemAddForm);
items_router.post("/add", addNewItem);

export default items_router;
