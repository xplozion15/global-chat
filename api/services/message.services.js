import { prisma } from "../lib/prisma.js";

const sendMessage = async (data) => {
  const { roomId, messageBody, replyId } = data;

  if (!roomId || !messageBody) {
    throw new Error("roomId and messageBody are required");
  }

  const message = await prisma.message.create({
    data: {
      chatroomId: Number(roomId),
      messageBody,
      replyId: replyId ? Number(replyId) : null,
    },
  });

  return message;
};

export { sendMessage };
