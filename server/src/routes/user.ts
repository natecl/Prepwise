import { Router } from "express";
import { getMe, updatePreferences } from "../controllers/userController";
import { authenticate } from "../middleware/auth";

export const userRouter = Router();

userRouter.get("/", authenticate, getMe);
userRouter.put("/preferences", authenticate, updatePreferences);
