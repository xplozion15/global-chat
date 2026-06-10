import { API_BASE_URL } from "../config/api";

const fetchChatrooms = async () => {
  const response = await fetch(`${API_BASE_URL}/chatrooms`);

  if (!response.ok) {
    throw new Error("Failed to fetch the chatrooms");
  }

  const chatrooms = await response.json();

  return chatrooms.chatrooms;
};

export { fetchChatrooms };
