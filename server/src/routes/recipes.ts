import { Router } from "express";
import { getRecipes, getRecipeById } from "../controllers/recipeController";

export const recipeRouter = Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipeById);
