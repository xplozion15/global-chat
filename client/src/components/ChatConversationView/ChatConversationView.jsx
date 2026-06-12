import styles from "./ChatConversationView.module.css";
import { Message } from "../Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import { TypingIndicator } from "../TypingIndiciator/TypingIndicator";
import { useOutletContext } from "react-router";

const ChatConversationView = () => {
  const { chatId } = useOutletContext();
  
  return (
    <>
      <div className={styles.conversationViewContainer}>
        <h2 className={styles.chatName}># Technology {chatId}</h2>
        <div className={styles.messages}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <TypingIndicator typingInfo={"Xajx, viena and 2 others are typing"} />
        <MessageInput />
      </div>
    </>
  );
};

export { ChatConversationView };
