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

const fetchChatroomMessages = async (req, res) => {
  try {
    const chatroomId = Number(req.params.chatroomId);
    const chatroomMessages = await prisma.message.findMany({
      where: {
        chatroomId: chatroomId,
      },
    });
    console.log(chatroomMessages)
    res.status(200).json({
      message: "Messages fetched successfully",
      chatroomMessages: chatroomMessages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

export { fetchChatrooms, fetchChatroomMessages };
