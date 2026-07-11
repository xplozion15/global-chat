import { prisma } from "../lib/prisma.js";

const fetchFriends = async (req, res) => {
  const userId = req.user.id;

  try {
    const friends = await prisma.user.findMany({
      where: {
        OR: [
          {
            sentRequests: {
              some: {
                receiverId: userId,
                requestStatus: "ACCEPTED",
              },
            },
          },
          {
            receivedRequests: {
              some: {
                senderId: userId,
                requestStatus: "ACCEPTED",
              },
            },
          },
        ],
      },
      include: {
        sentRequests: true,
        receivedRequests: true,
      },
    });

    return res.status(200).json({
      message: "Friends fetched successfully",
      friends: friends,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to fetch friends",
    });
  }
};

const UnfriendUser = async (req, res) => {
  const userId = req.body.user;
  const { friendId } = req.body;

  try {
    const { count } = await prisma.friendRequest.deleteMany({
      where: {
        OR: [
          {
            AND: [
              { receiverId: userId },
              { senderId: friendId },
              { requestStatus: "ACCEPTED" },
            ],
          },
          {
            AND: [
              { receiverId: friendId },
              { senderId: userId },
              { requestStatus: "ACCEPTED" },
            ],
          },
        ],
      },
    });

    if (count === 0) {
      return res.status(404).json({
        message: "Friendship not found",
      });
    }

    return res.status(204).json({
      message: "Unfriended successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to unfriend the user",
    });
  }
};

export { fetchFriends, UnfriendUser };
