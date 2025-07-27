import { Router } from "express";
import { getInventoryPage } from "../../controllers/inventory/inventory.controllers.js";

const inventory_router = Router();

inventory_router.get("/", getInventoryPage);

export default inventory_router;
