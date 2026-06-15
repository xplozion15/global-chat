import styles from "./ChatConversationView.module.css";
import { Message } from "../Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import { TypingIndicator } from "../TypingIndicator/TypingIndicator";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import { fetchMessagesInChatroom } from "../../services/chatroomServices";

const ChatConversationView = () => {
  const [chatroomMessages, setChatroomMessages] = useState([]);
  const { chatroomId } = useOutletContext();

  useEffect(() => {
    const loadChatroomMessages = async () => {
      try {
        const messages = await fetchMessagesInChatroom(chatroomId);

        setChatroomMessages(messages.chatroomMessages);
      } catch (error) {
        console.error(error);
      }
    };
    loadChatroomMessages();
  }, [chatroomId]);
  console.log(chatroomMessages);
  return (
    <>
      <div className={styles.conversationViewContainer}>
        <h2 className={styles.chatName}># Technology {chatroomId}</h2>
        <div className={styles.messages}>
          {chatroomMessages.length > 0 &&
            chatroomMessages.map((message) => {
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
