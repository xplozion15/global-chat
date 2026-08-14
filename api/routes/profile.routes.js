import express from "express";
const profileRouter = express.Router();
import { getProfile } from "../controllers/profile.controller.js";

profileRouter.get("/:profileId", getProfile);

export { profileRouter };
