import express from "express";
import { fetchFriends } from "../controllers/friends.controller.js";
const friendRouter = express.Router();

friendRouter.get("/", fetchFriends);


export {friendRouter};