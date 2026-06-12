import { prisma } from "./prisma.js";
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import GoogleOAuth20 from "passport-google-oauth20";

const GoogleStrategy = GoogleOAuth20.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile)
      try {
        let user = await prisma.user.findUnique({
          where: {
            googleId: profile.id,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              username: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
              nickname : profile.displayName,
            },
          });
        }
        cb(null, user);
      } catch (error) {
        cb(error, null);
      }
    },
  ),
);

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
   console.log("SERIALIZE", user.id);
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
    console.log("FOUND USER", user);
    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});
