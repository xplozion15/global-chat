import express from "express";
import {
  fetchFriends,
  UnfriendUser,
} from "../controllers/friends.controller.js";
const friendRouter = express.Router();

friendRouter.get("/", fetchFriends);
friendRouter.delete("/", UnfriendUser);

export { friendRouter };
