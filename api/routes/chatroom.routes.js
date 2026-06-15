import express from "express";
const chatroomRouter = express.Router();
import {
  fetchChatroomMessages,
  fetchChatrooms,
} from "../controllers/chatroom.controller.js";

chatroomRouter.get("/", fetchChatrooms);
chatroomRouter.get("/:chatroomId/messages", fetchChatroomMessages);

export { chatroomRouter };
