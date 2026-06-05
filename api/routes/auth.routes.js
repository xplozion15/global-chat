import express from "express";
const authRouter = express.Router();
import { registerUser } from "../controllers/auth.controller.js";

authRouter.post("/signup", registerUser);

export { authRouter };
