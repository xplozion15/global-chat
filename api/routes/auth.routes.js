import express from "express";
const authRouter = express.Router();
import { loginUser, registerUser } from "../controllers/auth.controller.js";

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

export { authRouter };
