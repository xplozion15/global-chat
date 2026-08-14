import styles from "./MessageInput.module.css";
import { Plus } from "lucide-react";
import { Smile } from "lucide-react";
import { useState } from "react";
import { socket } from "../../socket";

const MessageInput = ({ chatroomId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onMessageChange = (e) => {
    setMessageText(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!messageText.trim() && !selectedFile) return;

    socket.emit("send-message", {
      roomId: chatroomId,
      messageBody: messageText,
      replyId: null,
      image: selectedFile || null,
    });

    setMessageText("");
    setSelectedFile(null);
  };

  
  return (
    <>
      <div className={styles.messageInput}>
        <input
          type="file"
          name="upload-file"
          id="upload-file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          hidden
        />
        <label htmlFor="upload-file">
          <Plus className={styles.plusIcon} />
        </label>

        <label htmlFor="messageInputField" hidden></label>
        <input
          type="text"
          className={styles.messageInputField}
          value={messageText}
          onChange={onMessageChange}
        />
        <div className={styles.emojiSendButtonContainer}>
          <button className={styles.emojiPicker}>
            <Smile
              onClick={() => {
                setShowEmojiPicker(!showEmojiPicker);
              }}
            />
            {showEmojiPicker && (
              <div className={styles.emojiPickerElementWrapper}>
                <p>emoji</p>
              </div>
            )}
          </button>
          <button className={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export { MessageInput };
