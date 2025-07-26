import { Category } from "../models/category.model.js";

export async function getAllCategories() {
  try {
    const res = await Category.find();

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoriesNames() {
  try {
    const res = await getAllCategories();

    return res?.map((category: any) => category.categoryName);
  } catch (error) {
    console.error(error);
  }
}
