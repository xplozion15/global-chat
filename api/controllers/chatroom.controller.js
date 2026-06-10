import { prisma } from "../lib/prisma.js";

const fetchChatrooms = async (req, res) => {
  try {
    const chatrooms = await prisma.chatroom.findMany();

    return res.status(200).json({
      message: "Chatrooms fetched successfully",
      chatrooms: chatrooms,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch the categories",
    });
  }
};

export { fetchChatrooms };
