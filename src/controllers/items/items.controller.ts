import { Request, Response } from "express";
import { Item } from "../../models/items.model.js";

export async function getItemAddForm(req: Request, res: Response) {
  try {
    return res.render("forms/addItems");
  } catch (error) {
    console.error(error);
  }
}

export async function addNewItem(req: Request, res: Response) {
  try {
    const { itemName, category, quantity, expirationDate, notes, status } =
      req.body;

    const new_item = new Item({
      itemName,
      category,
      quantity,
      expirationDate,
      notes,
      status,
    });

    const savedItem = await new_item.save();

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(501);
  }
}
