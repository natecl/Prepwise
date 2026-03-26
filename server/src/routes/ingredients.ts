import { Router } from "express";
import {
  getIngredients,
  getIngredientById,
} from "../controllers/ingredientController";

export const ingredientRouter = Router();

ingredientRouter.get("/", getIngredients);
ingredientRouter.get("/:id", getIngredientById);
