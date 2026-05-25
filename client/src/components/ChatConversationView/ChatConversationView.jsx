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
        <TypingIndicator typingInfo={"Xajx, viena and 2 others are typing"} />
        <MessageInput />
      </div>
    </>
  );
};

export { ChatConversationView };
