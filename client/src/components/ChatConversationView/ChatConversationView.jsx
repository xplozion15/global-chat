import styles from "./ChatConversationView.module.css";
import { Message } from "../Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import { TypingIndicator } from "../TypingIndiciator/TypingIndicator";

const ChatConversationView = () => {
  return (
    <>
      <div className={styles.conversationViewContainer}>
        <h2 className={styles.chatName}># Technology</h2>
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
        <TypingIndicator/>
        <MessageInput/>
      </div>
    </>
  );
};

export { ChatConversationView };
