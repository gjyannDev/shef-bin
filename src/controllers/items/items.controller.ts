import { Request, Response } from "express";

export async function getItemAddForm(req: Request, res: Response) {
  try {
    return res.render("forms/addItems")
  } catch (error) {
    console.error(error);
  }
}
