import express from "express";
import { sendFriendRequest } from "../controllers/friendRequest.controller.js";
const friendRequestRouter = express.Router();

friendRequestRouter.post("/", sendFriendRequest);

export { friendRequestRouter };
