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

export { fetchFriends };
