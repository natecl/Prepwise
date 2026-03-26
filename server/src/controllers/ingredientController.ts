import { Request, Response } from "express";

export async function getIngredients(_req: Request, res: Response) {
  // TODO: Fetch ingredients from Supabase
  res.json({ message: "Get ingredients" });
}

export async function getIngredientById(req: Request, res: Response) {
  // TODO: Fetch ingredient by ID
  res.json({ message: `Get ingredient ${req.params.id}` });
}
