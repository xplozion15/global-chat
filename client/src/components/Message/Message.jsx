import styles from "./Message.module.css";
import { Ellipsis } from "lucide-react";


const Message = () => {
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
        </div>
        <button className={styles.dotsIcon}>
          <Ellipsis />
        </button>
      </div>
    </>
  );
};

export { Message };
