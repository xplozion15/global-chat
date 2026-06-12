import styles from "./ChatConversationList.module.css";
import { Link } from "react-router";
import { fetchChatrooms } from "../../services/chatroomServices";
import { useEffect, useState } from "react";

const ChatConversationList = () => {
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    const loadChatrooms = async () => {
      try {
        const chatrooms = await fetchChatrooms();
        setChatrooms(chatrooms);
      } catch (error) {
        console.error(error);
      }
    };
    loadChatrooms();
  }, []);
  return (
    <div className={styles.conversationListContainer}>
      <h2>Chatrooms</h2>
      <div className={styles.chatroomsListContainer}>
        {chatrooms.map((chat) => {
          return (
            <>
              <Link key={chat.id} to={`/chats/${chat.id}`}>
                #{chat.name}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export { ChatConversationList };
