import { Request, Response } from "express";
import { Category } from "../../models/category.model.js";

export async function getCategoryAddForm(req: Request, res: Response) {
  try {
    return res.render("forms/addCategory");
  } catch (error) {
    console.error(error);
  }
}

export async function addCategory(req: Request, res: Response) {
  try {
    const { categoryName, imageUrl, description } = req.body;

    const newCategory = new Category({
      categoryName,
      imageUrl,
      description,
    });

    await newCategory.save();

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}
