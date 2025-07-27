import { Item } from "../models/items.model.js";

export async function getAllItems() {
  try {
    const items = await Item.find();

    return items;
  } catch (error) {
    console.error(error);
  }
}
