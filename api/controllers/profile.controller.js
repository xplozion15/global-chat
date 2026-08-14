import { prisma } from "../lib/prisma.js";

const getProfile = async (req, res) => {
  const { profileId } = req.params;

  try {
    const profile = await prisma.user.findUnique({
      where: {
        id: profileId,
      },
      select: {
        id: true,
        nickname: true,
        username: true,
        bio: true,
        bannerColour: true,
      },
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      message: "profile found successfully",
      profile: profile,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to find the profile",
    });
  }
};

export { getProfile };
