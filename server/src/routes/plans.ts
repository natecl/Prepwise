import { Router } from "express";
import {
  generatePlan,
  savePlan,
  getPlans,
  getPlanById,
  getGroceryList,
} from "../controllers/planController";
import { authenticate } from "../middleware/auth";

export const planRouter = Router();

planRouter.post("/generate", authenticate, generatePlan);
planRouter.post("/save", authenticate, savePlan);
planRouter.get("/", authenticate, getPlans);
planRouter.get("/:id", authenticate, getPlanById);
planRouter.get("/:id/grocery-list", authenticate, getGroceryList);
