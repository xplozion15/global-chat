import styles from "./EditMessageInput.module.css";
import { useState } from "react";

const EditMessageInput = () => {
  const [editMessageText, setEditMessageText] = useState("");

  const onMessageChange = (e) => {
    // enter logic here
    const value = e.target.value;
    setEditMessageText(value);
  };

  return (
    <>
      <div className={styles.editMessageInput}>
        <label htmlFor="editMessageInputField" hidden></label>
        <input
          type="text"
          className={styles.editMessageInputField}
          value={editMessageText}
          onChange={onMessageChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              //   editMessage(e);
            } else if (e.key === "Escape") {
              // enter the escape logic here
            }
          }}
        />
        <p>Press Enter to save and escape to cancel</p>
      </div>
    </>
  );
};

export { EditMessageInput };
