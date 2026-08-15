import styles from "./MessageInput.module.css";
import { Plus } from "lucide-react";
import { Smile } from "lucide-react";
import { useState, useRef } from "react";
import { socket } from "../../socket";
import EmojiPicker from "emoji-picker-react";


const MessageInput = ({ chatroomId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const typingTimer = useRef(null);

  const onMessageChange = (e) => {
    //get the value of the event
    const value = e.target.value;

    //set msg text
    setMessageText(value);

    //send a signal to server about typing event
    socket.emit("typing", {
      chatroomId,
    });

    //clear the existing typingtimer first
    clearTimeout(typingTimer.current);

    //add a stop type event if the user doesnt type for 1 s
    typingTimer.current = setTimeout(() => {
      socket.emit("stopTyping", {
        chatroomId,
      });
    }, 1000);
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

    clearTimeout(typingTimer.current);

    socket.emit("stopTyping", {
      chatroomId,
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(e);
            }
          }}
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
                <EmojiPicker
                  theme={"dark"}
                  onEmojiClick={(emojiObject) =>
                    setMessageText(
                      (prevMessage) => `${prevMessage} ${emojiObject.emoji}`,
                    )
                  }
                />
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
