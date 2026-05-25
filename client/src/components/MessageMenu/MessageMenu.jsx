import styles from "./MessageMenu.module.css";
import { Pencil } from "lucide-react";
import { Reply } from "lucide-react";
import { Trash } from "lucide-react";

const MessageMenu = () => {
  return (
    <>
      <div className={styles.messageMenu}>
        <div className={styles.messageReactions}>
          <p>❤️</p>
          <p>😂</p>
          <p>😮</p>
          <p>😭</p>
          <p>👍</p>
        </div>
        <div className={styles.messageOptions}>
          <Pencil />
          <Reply />
          <Trash />
        </div>
      </div>
    </>
  );
};

export { MessageMenu };
