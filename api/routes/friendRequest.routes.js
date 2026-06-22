import express from "express";
import {
  fetchPendingRequests,
  sendFriendRequest,
} from "../controllers/friendRequest.controller.js";
const friendRequestRouter = express.Router();

friendRequestRouter.get("/pending", fetchPendingRequests);
friendRequestRouter.post("/", sendFriendRequest);

export { friendRequestRouter };
