//imports
import express from "express";
const app = express();
import "dotenv/config";
import expressSession from "express-session";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import "./lib/passport.js";
import passport from "passport";
import cors from "cors";
import { authRouter } from "./routes/auth.routes.js";
import { chatroomRouter } from "./routes/chatroom.routes.js";
import { friendRequestRouter } from "./routes/friendRequest.routes.js";
import { friendRouter } from "./routes/friends.routes.js";
import { sendMessage } from "./services/message.services.js";

//socket.io
import { Server } from "socket.io";
import { createServer } from "node:http";
//socket server
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTENDURL,
    credentials: true,
  },
});

//credentials and configs
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
const port = process.env.PORT;

//for cors policy
app.use(
  cors({
    origin: process.env.FRONTENDURL,
    credentials: true,
  }),
);

//to add form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express esssion
app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

//initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//routers
app.use("/auth", authRouter);
app.use("/chatrooms", chatroomRouter);
app.use("/friendrequests", friendRequestRouter);
app.use("/friends", friendRouter);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined ${roomId}`);
  });

  socket.on("leave-room", (roomId) => {
    socket.leave(roomId);
    console.log(`${socket.id} left ${roomId}`);
  });

  socket.on("send-message", async (data) => {
    try {
      const sentMessage = await sendMessage(data);

      io.to(data.roomId).emit("receive-message", sentMessage);
    } catch (error) {
      console.error(error);

      socket.emit("message-error", {
        message: error.message,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log("socket on");
});
