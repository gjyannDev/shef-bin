import { Router } from "express";
import {
  addNewItem,
  deleteItem,
  getEditItemForm,
  getItemAddForm,
  updateItems,
  viewItemDetails,
} from "../../controllers/items/items.controller.js";

const items_router = Router();

items_router.get("/add", getItemAddForm);
items_router.post("/add", addNewItem);
items_router.get("/details/:id", viewItemDetails);
items_router.get("/edit/:id", getEditItemForm);
items_router.post("/update/:id", updateItems);
items_router.delete("/delete/:id", deleteItem);

export default items_router;
