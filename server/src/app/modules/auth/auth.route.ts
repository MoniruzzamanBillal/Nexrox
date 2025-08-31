import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// ! for registering a user
router.post("/register", authController.registerUser);

// ! for creating a job
router.post("/login", authController.loginUser);

//
export const authRouter = router;
