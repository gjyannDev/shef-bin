import { Request, Response } from "express";
import {
  getAllItems,
  getFilteredItems,
} from "../../services/items.services.js";
import { formatDate } from "../../utils/dateFormatter.js";

export async function getInventoryPage(req: Request, res: Response) {
  try {
    const items = await getAllItems();

    return res.render("pages/inventory", {
      items: items?.map((item) => ({
        ...item.toObject(),
        formattedTime: formatDate(item.expirationDate),
      })),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).render("pages/inventory", {
      items: [],
      error: "Failed to load inventory items",
    });
  }
}

export async function filteredInventoryPage(req: Request, res: Response) {
  try {
    const category = req.query.category as string | undefined;
    const status = req.query.status as string | undefined;
    const sortBy = req.query.sortBy as string | undefined;

    const items = await getFilteredItems({
      category,
      status,
      sortBy,
    });

    return res.render("pages/inventory", {
      items: items?.map((item) => ({
        ...item.toObject(),
        formattedTime: formatDate(item.expirationDate),
      })),
    });

  } catch (error) {
    console.error("Error fetching data: ", error);
    throw Error;
  }
}
