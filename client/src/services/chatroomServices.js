import { API_BASE_URL } from "../config/api";

const fetchChatrooms = async () => {
  const response = await fetch(`${API_BASE_URL}/chatrooms`);

  if (!response.ok) {
    throw new Error("Failed to fetch the chatrooms");
  }

  const chatrooms = await response.json();

  return chatrooms.chatrooms;
};

const fetchMessagesInChatroom = async (chatroomId) => {
  const response = await fetch(
    `${API_BASE_URL}/chatrooms/${chatroomId}/messages`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the messages");
  }
  const chatRoomMessages = await response.json();

  return chatRoomMessages;
};

export { fetchChatrooms, fetchMessagesInChatroom };
