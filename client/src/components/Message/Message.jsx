import styles from "./Message.module.css";
import { Ellipsis } from "lucide-react";
import { MessageMenu } from "../MessageMenu/MessageMenu";
import { useState } from "react";

const Message = () => {
  const [showMessageMenu, setShowMessageMenu] = useState(false);

  return (
    <>
      <div className={styles.message}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9gJACNLV5RJ5RC8Me7u3GRvAQ-w8DHNqNw&s"
          alt="Profile Avatar"
          className={styles.messagePfp}
        />
        <div>
          <p className={styles.userName}>Xplozion</p>
          <p className={styles.parentMessage}>This is the parent message</p>
          <p className={styles.replyMessage}>this is a sample reply</p>
          <div className={styles.messageReactionContainer}>
            <div className={styles.messageReaction}>😭 1</div>
            <div className={styles.messageReaction}>😂 3</div>
          </div>
        </div>
        <button
          className={styles.dotsIcon}
          onClick={() => {
            setShowMessageMenu((prev) => !prev);
          }}
        >
          <Ellipsis />
        </button>

        {showMessageMenu && <MessageMenu />}
      </div>
    </>
  );
};

export { Message };
