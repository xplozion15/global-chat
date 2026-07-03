import { prisma } from "../lib/prisma.js";
// model User {
//   id               String          @id @default(uuid())
//   nickname         String
//   username         String          @unique
//   password         String?
//   email            String          @unique
//   googleId         String?         @unique
//   bio              String          @default("hi im new here")
//   status           UserStatus      @default(IDLE)
//   bannerColour     String          @default("#5865F2")
//   reactions        Reaction[]
//   sentRequests     FriendRequest[] @relation("senderId")
//   receivedRequests FriendRequest[] @relation("receiverId")
// }

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

export { fetchFriends };
