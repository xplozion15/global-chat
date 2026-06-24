import express from "express";
import {
  acceptFriendRequest,
  fetchPendingRequests,
  rejectFriendRequest,
  sendFriendRequest,
} from "../controllers/friendRequest.controller.js";
const friendRequestRouter = express.Router();

friendRequestRouter.get("/pending", fetchPendingRequests);
friendRequestRouter.post("/", sendFriendRequest);
friendRequestRouter.patch("/:requestId/accept", acceptFriendRequest);
friendRequestRouter.patch("/:requestId/reject", rejectFriendRequest);

export { friendRequestRouter };
