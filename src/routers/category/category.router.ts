import { Router } from "express";
import {
  addCategory,
  getCategoryAddForm,
} from "../../controllers/category/category.controller.js";

const category_router = Router();

category_router.get("/add", getCategoryAddForm);
category_router.post("/add", addCategory);

export default category_router;
