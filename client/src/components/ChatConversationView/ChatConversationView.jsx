import styles from "./ChatConversationView.module.css";
import { Message } from "../Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import { TypingIndicator } from "../TypingIndicator/TypingIndicator";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchChatroomName,
  fetchMessagesInChatroom,
} from "../../services/chatroomServices";
import { socket } from "../../socket";

const ChatConversationView = () => {
  const [chatroomMessages, setChatroomMessages] = useState([]);
  const [chatroomName, setChatroomName] = useState("");
  const { chatroomId } = useParams();
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    //add users to the typing state
    const handleUserTyping = ({ userId, nickname }) => {
      setTypingUsers((prev) => {
        if (prev.some((user) => user.userId === userId)) {
          return prev;
        }

        return [...prev, { userId, nickname }];
      });
    };

    //remove users from typing state when they stop typing
    const handleUserStoppedTyping = ({ userId }) => {
      setTypingUsers((prev) => prev.filter((user) => user.userId !== userId));
    };

    socket.on("userTyping", handleUserTyping);
    socket.on("userStoppedTyping", handleUserStoppedTyping);

    return () => {
      socket.off("userTyping", handleUserTyping);
      socket.off("userStoppedTyping", handleUserStoppedTyping);
    };
  }, []);

  useEffect(() => {
    if (!chatroomId) return;

    socket.emit("join-room", chatroomId);

    const handleReceivedMessage = (message) => {
      setChatroomMessages((prevChatroomMessages) => [
        ...prevChatroomMessages,
        message,
      ]);
    };
    socket.on("receive-message", handleReceivedMessage);

    return () => {
      socket.emit("leave-room", chatroomId);
      socket.off("receive-message", handleReceivedMessage);
    };
  }, [chatroomId]);

  useEffect(() => {
    const loadChatroomMessages = async () => {
      try {
        if (!chatroomId) return;

        const messages = await fetchMessagesInChatroom(chatroomId);
        console.log(messages);
        setChatroomMessages(messages.chatroomMessages);
      } catch (error) {
        console.error(error);
      }
    };
    loadChatroomMessages();
  }, [chatroomId]);

  useEffect(() => {
    const loadChatroomName = async () => {
      try {
        if (!chatroomId) return;

        const chatroomName = await fetchChatroomName(chatroomId);
        setChatroomName(chatroomName.chatroomName);
      } catch (error) {
        console.error(error);
      }
    };
    loadChatroomName();
  }, [chatroomId]);

  return (
    <>
      <div className={styles.conversationViewContainer}>
        <h2 className={styles.chatName}># {chatroomName}</h2>
        <div className={styles.messages}>
          {chatroomMessages.map((message) => {
            return <Message message={message} key={message.id} />;
          })}
        </div>
        <TypingIndicator typingUsers={typingUsers} />
        <MessageInput chatroomId={chatroomId} />
      </div>
    </>
  );
};

export { ChatConversationView };
