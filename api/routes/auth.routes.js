import express from "express";
const authRouter = express.Router();
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import passport from "passport";
import "dotenv/config";

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.FRONTENDURL);
  },
);
authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

export { authRouter };
