import styles from "./DmsConversationView.module.css";
import { Message } from "../Message/Message";
import { MessageInput } from "../MessageInput/MessageInput";
import { TypingIndicator } from "../TypingIndicator/TypingIndicator";

const DmsConversationView = () => {
  return (
    <>
      <div className={styles.dmsViewContainer}>
        <div className={styles.chatName}>
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="dm-pfp"
            height={50}
            width={50}
            className={styles.dmPfp}
          />
          <h2>Aarav Sharma</h2>
        </div>
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
        <TypingIndicator typingInfo={"Aarav is typing"} />
        <MessageInput />
      </div>
    </>
  );
};

export { DmsConversationView };
