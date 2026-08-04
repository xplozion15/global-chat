import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import passport from "passport";

const registerUser = async (req, res) => {
  const { nickname, username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        nickname,
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      return res.status(200).json({
        message: "Logged in successfully",
        user: {
          id: user.id,
          username: user.username,
          nickname: user.nickname,
        },
      });
    });
  })(req, res, next);
};

const getMe = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        nickname: true,
        bio: true,
        bannerColour: true,
        status: true,
      },
    });
    return res.status(200).json({
      message: "Profile fetched successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the profile details",
    });
    console.error(error);
  }
};

const logoutUser = async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    //destroy the session from the server (db)
    req.session.destroy((destroyErr) => {
      if (destroyErr) {
        return next(destroyErr);
      }

      //clear the cookies
      res.clearCookie("connect.sid");

      //return a response
      return res.status(200).json({
        message: "Logged out successfully",
      });
    });
  });
};

export { registerUser, loginUser, getMe, logoutUser };
