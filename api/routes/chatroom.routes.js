import express from "express";
const chatroomRouter = express.Router();
import {
  fetchChatroomMessages,
  fetchChatroomName,
  fetchChatrooms,
} from "../controllers/chatroom.controller.js";

chatroomRouter.get("/", fetchChatrooms);
chatroomRouter.get("/:chatroomId/messages", fetchChatroomMessages);
chatroomRouter.get("/:chatroomId", fetchChatroomName);

export { chatroomRouter };
