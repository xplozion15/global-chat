import { prisma } from "./prisma.js";
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      let fetchUser = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
      const user = fetchUser;
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let fetchUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    const user = fetchUser;

    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});
