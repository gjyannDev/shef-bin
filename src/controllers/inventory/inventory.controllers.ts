import { Request, Response } from "express";

export async function getInventoryPage(req: Request, res: Response) {
  try {
    return res.render("pages/inventory");
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
