import { Request, Response } from "express";

export async function getMe(req: Request, res: Response) {
  // TODO: Fetch user profile from Supabase
  res.json({ message: "Get user profile" });
}

export async function updatePreferences(req: Request, res: Response) {
  // TODO: Update user preferences
  res.json({ message: "Update preferences" });
}
