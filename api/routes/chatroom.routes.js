import express from "express";
const chatroomRouter = express.Router();
import { fetchChatrooms } from "../controllers/chatroom.controller.js";

chatroomRouter.get("/", fetchChatrooms);

export { chatroomRouter };
