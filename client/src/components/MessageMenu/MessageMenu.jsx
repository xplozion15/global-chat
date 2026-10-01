import styles from "./MessageMenu.module.css";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

const MessageMenu = ({
  id,
  toggleReactionHandler,
  messageId,
  setChatroomMessages,
}) => {
  const deletePopoverId = `delete-message-${messageId}`;

  return (
    <>
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
              onClick={() => toggleReactionHandler("LOVE")}
            >
              ❤️
            </button>
            <button
              className={styles.emojiButton}
              popoverTarget={id}
              popoverTargetAction="hide"
              onClick={() => toggleReactionHandler("LAUGH")}
            >
              😂
            </button>
            <button
              className={styles.emojiButton}
              popoverTarget={id}
              popoverTargetAction="hide"
              onClick={() => toggleReactionHandler("WOW")}
            >
              😮
            </button>
            <button
              className={styles.emojiButton}
              popoverTarget={id}
              popoverTargetAction="hide"
              onClick={() => toggleReactionHandler("CRY")}
            >
              😭
            </button>
            <button
              className={styles.emojiButton}
              popoverTarget={id}
              popoverTargetAction="hide"
              onClick={() => toggleReactionHandler("OK")}
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
              popoverTarget={deletePopoverId}
              
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>

      <div
        id={deletePopoverId}
        popover="auto"
        className={styles.deleteMessagePopover}
      >
        <p>Delete this message?</p>
        <div className={styles.deleteMessageActions}>
          <button
            className={styles.cancelDeleteButton}
            popoverTarget={deletePopoverId}
            popoverTargetAction="hide"
          >
            Cancel
          </button>
          <button
            className={styles.confirmDeleteButton}
            onClick={() => {
              setChatroomMessages((prevMessages) =>
                prevMessages.filter((message) => message.id !== messageId),
              );
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export { MessageMenu };
