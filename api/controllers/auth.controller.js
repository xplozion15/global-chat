import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";

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

export { registerUser };
