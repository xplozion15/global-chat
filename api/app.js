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

const port = process.env.PORT;

// DATABASE_URL defined in env file included in prisma.config.js; see Prisma docs
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

app.use(
  cors({
    origin: process.env.FRONTENDURL,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
