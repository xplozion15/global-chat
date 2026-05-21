import styles from "./ChatConversationList.module.css";
import { Link } from "react-router";

const ChatConversationList = () => {
  const chatRooms = {
    success: true,
    data: [
      {
        id: "room_1",
        name: "General Chat",
      },
      {
        id: "room_2",
        name: "React Study Group",
      },
      {
        id: "room_3",
        name: "Gaming Squad",
      },
      {
        id: "room_4",
        name: "Music Lounge",
      },
      {
        id: "room_5",
        name: "Anime Fans",
      },
      {
        id: "room_6",
        name: "Movie Club",
      },
      {
        id: "room_7",
        name: "Coding Help",
      },
      {
        id: "room_8",
        name: "Late Night Talks",
      },
      {
        id: "room_1",
        name: "General Chat",
      },
      {
        id: "room_2",
        name: "React Study Group",
      },
      {
        id: "room_3",
        name: "Gaming Squad",
      },
      {
        id: "room_4",
        name: "Music Lounge",
      },
      {
        id: "room_5",
        name: "Anime Fans",
      },
      {
        id: "room_6",
        name: "Movie Club",
      },
      {
        id: "room_7",
        name: "Coding Help",
      },
      {
        id: "room_8",
        name: "Late Night Talks",
      },
    ],
  };

  return (
    <div className={styles.conversationListContainer}>
      <h2>Chatrooms</h2>
      <div className={styles.chatroomsListContainer}>
        {chatRooms.data.map((chat) => {
          return (
            <>
              <Link># {chat.name}</Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export { ChatConversationList };
