import { Request, Response } from "express";
import { Item } from "../../models/items.model.js";
import { addActivityLogs } from "../../utils/logActivity.js";

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
    await new_item.save();

    addActivityLogs({
      itemId: new_item._id,
      action: "add",
      details: `Add ${new_item.itemName} was added`,
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(501);
  }
}
