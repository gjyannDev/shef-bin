import { Request, Response } from "express";
import { Category } from "../../models/category.model.js";
import { addActivityLogs } from "../../utils/logActivity.js";

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

    const new_category = new Category({
      categoryName,
      imageUrl,
      description,
    });
    await new_category.save();

    addActivityLogs({
      itemId: new_category._id,
      action: "add",
      details: `Add ${new_category.categoryName} was added`,
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}
