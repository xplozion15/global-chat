import styles from "./TypingIndicator.module.css";
import { typingUsersText } from "../../utils/TypingUsersText";

const TypingIndicator = ({ typingUsers }) => {
  return (
    <>
      {/* only show typing indicator when more than 0 users are typing */}
      {typingUsers.length > 0 && (
        <p className={styles.typingIndicator}>{typingUsersText(typingUsers)}</p>
      )}
    </>
  );
};

export { TypingIndicator };
