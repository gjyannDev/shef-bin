import { format } from "date-fns";
import { Request, Response } from "express";
import { Item } from "../../models/items.model.js";
import { getItemsById } from "../../services/items.services.js";
import { formatDateMonthYear } from "../../utils/dateFormatter.js";
import { addActivityLogs } from "../../utils/logActivity.js";

export async function getItemAddForm(req: Request, res: Response) {
  try {
    return res.render("forms/addItems");
  } catch (error) {
    console.error(error);
  }
}

export async function getEditItemForm(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const item = await getItemsById(id);

    if (!item) {
      //Add an 404 page not found
      return res.status(404).render("");
    }

    return res.render("forms/editItems", { item });
  } catch (error) {
    console.error("Error getting the edit form: ", error);
  }
}

export async function addNewItem(req: Request, res: Response) {
  try {
    const {
      itemName,
      category,
      quantity,
      unit,
      expirationDate,
      notes,
      status,
    } = req.body;

    const formatted_exp_date = format(new Date(expirationDate), "MMMM d, yyyy");

    const new_item = new Item({
      itemName,
      category,
      quantity,
      unit,
      expirationDate,
      notes,
      status,
      formattedExpirationDate: formatted_exp_date,
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
    return res.status(500).json({
      success: false,
      message: "Failed to add items",
    });
  }
}

export async function viewItemDetails(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const item = await getItemsById(id);

    if (!item) {
      //Add an 404 page not found
      return res.status(404).render("");
    }

    return res.render("pages/details", {
      item,
      formattedCreatedAt: format(new Date(item.createdAt), "MMMM d, yyyy"),
      formattedUpdatedAt: format(new Date(item.updatedAt), "MMMM d, yyyy"),
    });
  } catch (error) {
    console.error("Error editing: ", error);
    throw new Error("Error editing");
  }
}

export async function updateItems(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const {
      itemName,
      category,
      quantity,
      unit,
      expirationDate,
      notes,
      status,
    } = req.body;

    const formatted_exp_date = format(new Date(expirationDate), "MMMM d, yyyy");

    const updated_item = await Item.findByIdAndUpdate(
      id,
      {
        itemName,
        category,
        quantity,
        unit,
        expirationDate,
        notes,
        status,
        formattedExpirationDate: formatted_exp_date,
      },
      { new: true }
    );

    if (!updated_item) {
      //Add an error page in here
      return res.status(404).send("Item not found");
    }

    addActivityLogs({
      itemId: updated_item._id,
      action: "updated",
      details: `Item ${updated_item.itemName} was updated`,
    });

    res.redirect("/inventory");
  } catch (error) {
    console.error("Error updating item: ", error);
    throw new Error("Error updating item");
  }
}
