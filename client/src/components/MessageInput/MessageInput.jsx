import styles from "./MessageInput.module.css";
import { Plus } from "lucide-react";
import { Smile } from "lucide-react";
import { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MessageInput = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  return (
    <>
      <div className={styles.messageInput}>
        <Plus className={styles.plusIcon} />
        <label htmlFor="messageInputField" hidden></label>
        <input type="text" className={styles.messageInputField} />
        <div className={styles.emojiSendButtonContainer}>
          <button className={styles.emojiPicker}>
            <Smile
              onClick={() => {
                setShowEmojiPicker(!showEmojiPicker);
              }}
            />
            {showEmojiPicker && (
              <div className={styles.emojiPickerElementWrapper}>
                <Picker data={data} onEmojiSelect={console.log} />
              </div>
            )}
          </button>
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </>
  );
};

export { MessageInput };
