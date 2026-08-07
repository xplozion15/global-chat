import { prisma } from "../lib/prisma.js";

const sendMessage = async (data) => {
  console.log(data);
  const { roomId, messageBody, replyId, senderId } = data;

  if (!roomId || !messageBody) {
    throw new Error("roomId and messageBody are required");
  }

  const message = await prisma.message.create({
    data: {
      chatroomId: Number(roomId),
      messageBody,
      replyId: replyId ? Number(replyId) : null,
      senderId: senderId,
    },
    include: {
      sender: {
        select: {
          id: true,
          nickname: true,
        },
      },
    },
  });

  return message;
};

export { sendMessage };
