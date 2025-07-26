import { Request, Response } from "express";
import { getAllCategories } from "../../services/category.services.js";

export async function getHomepage(req: Request, res: Response) {
  try {
    const categories = await getAllCategories();

    res.render("index", { categories });
  } catch (error) {
    console.error(error);
  }
}
