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

//listener
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
