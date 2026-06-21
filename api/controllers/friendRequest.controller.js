import { prisma } from "../lib/prisma.js";

const sendFriendRequest = async (req, res) => {
  const { username } = req.body;
  const senderId = req.user.id;
  try {
    const receiver = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!receiver) {
      return res.status(404).json({
        message: "Failed to find the receiver",
      });
    }

    const friendRequest = await prisma.friendRequest.create({
      data: {
        senderId: senderId,
        receiverId: receiver.id,
      },
    });

    res.status(201).json({
      message: "Friend request send successfully",
      friendRequest,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to sent the friend request",
    });
  }
};

const fetchPendingRequests = async (req, res) => {
  const userId = req.user.id;

  if (!userId) {
    return res.status(401).json({
      message: "User not authenticated",
    });
  }

  try {
    const pendingRequests = await prisma.friendRequest.findMany({
      where: {
        receiverId: userId,
        requestStatus: "PENDING",
      },
      include: {
        sender: true,
      },
    });

    return res.status(200).json({
      message: "Pending requests fetched successfully",
      pendingRequests,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch the pending requests",
    });
  }
};

export { sendFriendRequest, fetchPendingRequests };
