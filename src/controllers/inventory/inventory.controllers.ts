import { Request, Response } from "express";
import { getAllItems } from "../../services/items.services.js";
import { formatDate } from "../../utils/dateFormatter.js";

export async function getInventoryPage(req: Request, res: Response) {
  try {
    const items = await getAllItems();

    return res.render("pages/inventory", { items: items?.map((item) => ({
      ...item.toObject(),
      formattedTime: formatDate(item.expirationDate)
    }))});
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
