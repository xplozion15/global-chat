import { API_BASE_URL } from "../config/api";

const fetchFriends = async () => {
  const response = await fetch(`${API_BASE_URL}/friends`, {
    method: "GET",
    credentials: "include",
  });

  const friends = await response.json();
  if (!response.ok) {
    throw new Error(friends.message);
  }

  return friends;
};

const unfriendUser = async (friendId) => {
  const response = await fetch(`${API_BASE_URL}/friends`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      friendId: friendId,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Failed to unfriend user");
  }

  return result;
};

export { fetchFriends, unfriendUser };
