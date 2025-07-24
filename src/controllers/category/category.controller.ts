import { Request, Response } from "express";

export async function getCategoryAddForm(req: Request, res: Response) {
  try {
    return res.render("forms/addCategory");
  } catch (error) {
    console.error(error);
  }
}
