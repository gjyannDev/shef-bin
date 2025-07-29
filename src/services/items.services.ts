import { Error } from "mongoose";
import { Item } from "../models/items.model.js";
import { FilterOptions } from "../types/items.types.js";

export async function getAllItems() {
  try {
    const items = await Item.find();

    return items;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilteredItems({
  category,
  status,
  sortBy,
}: FilterOptions) {
  try {
    let query = Item.find();

    if (category) {
      query = query.where("category").equals(category);
    } else if (status) {
      query = query.where("status").equals(status);
    }

    return await query.exec();
  } catch (error) {
    console.error("Error fetching items: ", error);
    throw new Error("Failed to fetch filtered items");
  }
}

export async function getItemsById(id: string) {
  try {
    const item = await Item.findById(id);

    return item;
  } catch (error) {
    console.error("Error fetching item by id", error);
  }
}
