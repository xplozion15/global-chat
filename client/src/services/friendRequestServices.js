import { API_BASE_URL } from "../config/api";

const sendFriendRequest = async (username) => {
  const response = await fetch(`${API_BASE_URL}/friendrequests`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });

  const friendRequestResult = await response.json();

  if (!response.ok) {
    throw new Error(friendRequestResult.message);
  }

  return friendRequestResult;
};

export { sendFriendRequest };
