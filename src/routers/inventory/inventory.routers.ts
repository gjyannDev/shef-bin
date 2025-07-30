import { Router } from "express";
import {
  filteredInventoryPage,
  getInventoryPage,
} from "../../controllers/inventory/inventory.controllers.js";
import { getEditItemForm, updateItems, viewItemDetails } from "../../controllers/items/items.controller.js";

const inventory_router = Router();

inventory_router.get("/", getInventoryPage);
inventory_router.get("/filter", filteredInventoryPage);

inventory_router.get("/edit/:id", getEditItemForm);
inventory_router.post("/edit/:id", updateItems);

inventory_router.get("/details/:id", viewItemDetails);

export default inventory_router;
