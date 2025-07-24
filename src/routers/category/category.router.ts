import { Router } from "express";
import { getCategoryAddForm } from "../../controllers/category/category.controller.js";

const category_router = Router();

category_router.get("/categories", getCategoryAddForm);

export default category_router;
