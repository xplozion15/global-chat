import { prisma } from "../lib/prisma.js";
import { uploadImage } from "./cloudinary.services.js";

const sendMessage = async (data) => {
  console.log(data);
  const { roomId, messageBody, replyId, senderId, image } = data;

  if (!roomId) {
    throw new Error("roomId is required");
  }

  let imageUrl = null;

  if (image) {
    const result = await uploadImage(image);

    imageUrl = result.secure_url;
  }

  const message = await prisma.message.create({
    data: {
      chatroomId: Number(roomId),
      messageBody: messageBody || "",
      replyId: replyId ? Number(replyId) : null,
      senderId: senderId,
      imageUrl,
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
