import styles from "./MessageMenu.module.css";
import { Pencil } from "lucide-react";
import { Reply } from "lucide-react";
import { Trash } from "lucide-react";

const MessageMenu = ({ id }) => {
  return (
    <div
      id={id}
      popover="auto"
      className={styles.messageMenu}
      style={{ positionAnchor: `--${id}` }}
    >
      <div className={styles.messageMenuInner}>
        <div className={styles.messageReactions}>
          <button
            className={styles.emojiButton}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            ❤️
          </button>
          <button
            className={styles.emojiButton}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            😂
          </button>
          <button
            className={styles.emojiButton}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            😮
          </button>
          <button
            className={styles.emojiButton}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            😭
          </button>
          <button
            className={styles.emojiButton}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            👍
          </button>
        </div>

        <div className={styles.messageOptions}>
          <button
            className={styles.actionButtons}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            <Pencil />
          </button>
          <button
            className={styles.actionButtons}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            <Reply />
          </button>
          <button
            className={styles.actionButtons}
            popoverTarget={id}
            popoverTargetAction="hide"
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export { MessageMenu };
