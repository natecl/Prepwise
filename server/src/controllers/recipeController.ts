import { Request, Response } from "express";

export async function getRecipes(_req: Request, res: Response) {
  // TODO: Fetch recipes from Supabase
  res.json({ message: "Get recipes" });
}

export async function getRecipeById(req: Request, res: Response) {
  // TODO: Fetch recipe by ID
  res.json({ message: `Get recipe ${req.params.id}` });
}
