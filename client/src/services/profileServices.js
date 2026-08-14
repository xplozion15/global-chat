import { API_BASE_URL } from "../config/api";

const getProfile = async (profileId) => {
  const profileResponse = await fetch(`${API_BASE_URL}/profiles/${profileId}`, {
    method: "GET",
    credentials: "include",
  });

  const profileResult = await profileResponse.json();

  if (!profileResponse.ok) {
    throw new Error("Failed to fetch the profile");
  }
  return profileResult;
};

export { getProfile };
