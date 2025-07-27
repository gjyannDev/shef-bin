import { Request, Response } from "express";
import { getAllItems } from "../../services/items.services.js";

export async function getInventoryPage(req: Request, res: Response) {
  try {
    const items = await getAllItems();
    
    return res.render("pages/inventory", { items });
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
