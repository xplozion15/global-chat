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

const ChatConversationView = () => {
  const [chatroomMessages, setChatroomMessages] = useState([]);
  const [chatroomName, setChatroomName] = useState("");
  const { chatroomId } = useParams();

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
        <TypingIndicator typingInfo={"Xajx, viena and 2 others are typing"} />
        <MessageInput />
      </div>
    </>
  );
};

export { ChatConversationView };
