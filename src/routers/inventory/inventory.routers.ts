import { Router } from "express";
import {
  filteredInventoryPage,
  getInventoryPage,
} from "../../controllers/inventory/inventory.controllers.js";

const inventory_router = Router();

inventory_router.get("/", getInventoryPage);
inventory_router.get("/filter", filteredInventoryPage);

export default inventory_router;
