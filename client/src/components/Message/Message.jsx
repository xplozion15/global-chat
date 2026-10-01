import { Ellipsis } from "lucide-react";
import styles from "./Message.module.css";
import { useState } from "react";
import { Profile } from "../Profile/Profile";
import { getProfile } from "../../services/profileServices";
import { useRef, useEffect } from "react";
import { MessageMenu } from "../MessageMenu/MessageMenu";
import { socket } from "../../socket";
import { getReactionCountsPerEmoji } from "../../utils/messageReactionsHelper";

const Message = ({ message, setChatroomMessages }) => {
  const [profileInfo, setProfileInfo] = useState(null);
  const profileDialogRef = useRef(null);
  const menuId = `messageMenu-${message.id}`;
  const [reactions, setReactions] = useState(message.reaction || []);


  //for handling profile clicks
  const handleProfileClick = async (profileId) => {
    try {
      const profile = await getProfile(profileId);

      setProfileInfo(profile);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  //to show the modal when the new profile info is fetched.
  useEffect(() => {
    if (profileInfo) {
      profileDialogRef.current?.showModal();
    }
  }, [profileInfo]);

  useEffect(() => {
    const reactionAddedHandler = (data) => {
      console.log("reactionAdded received", data);
      if (data.messageId !== message.id) return;
      setReactions((prev) => [...prev, data.reaction]);
    };

    const reactionRemovedHandler = (data) => {
      console.log("reactionAdded received", data);
      if (data.messageId !== message.id) return;
      setReactions((prev) =>
        prev.filter((reaction) => {
          return !(
            reaction.senderId === data.userId && reaction.type === data.type
          );
        }),
      );
    };

    socket.on("reactionAdded", reactionAddedHandler);
    socket.on("reactionRemoved", reactionRemovedHandler);

    return () => {
      socket.off("reactionAdded", reactionAddedHandler);
      socket.off("reactionRemoved", reactionRemovedHandler);
    };
  }, [message.id]);

  const toggleReactionHandler = (type) => {
    
    socket.emit("toggleReaction", {
      messageId: message.id,
      type,
      chatroomId: message.chatroomId,
    });
  };

  //for emoji mapping
  const reactionEmojis = {
    LOVE: "❤️",
    LAUGH: "😂",
    WOW: "😮",
    CRY: "😭",
    OK: "👍",
  };

  return (
    <>
      <div className={styles.message}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9gJACNLV5RJ5RC8Me7u3GRvAQ-w8DHNqNw&s"
          alt="Profile Avatar"
          className={styles.messagePfp}
          onClick={() => handleProfileClick(message.sender.id)}
        />
        {profileInfo && (
          <Profile
            profileInfo={profileInfo}
            profileDialogRef={profileDialogRef}
          />
        )}

        <div>
          <p className={styles.userName}>{message.sender["nickname"]}</p>
          {message.messageBody && (
            <p className={styles.parentMessage}>{message.messageBody}</p>
          )}
          {message.imageUrl && (
            <img
              src={message.imageUrl}
              alt="chat-image"
              loading="lazy"
              className={styles.chatImage}
            />
          )}

       

          {Object.entries(getReactionCountsPerEmoji(reactions)).map(
            ([type, count]) => {
              return (
                <button
                  className={styles.messageReaction}
                  key={type}
                  onClick={() => toggleReactionHandler(type)}
                >
                  {reactionEmojis[type]} {count}
                </button>
              );
            },
          )}
        </div>

        <button
          className={styles.dotsIcon}
          popovertarget={menuId}
          style={{ anchorName: `--${menuId}` }}
        >
          <Ellipsis />
        </button>
        <MessageMenu
          id={menuId}
          toggleReactionHandler={toggleReactionHandler}
          messageId={message.id}
          setChatroomMessages={setChatroomMessages}
        />
      </div>
    </>
  );
};

export { Message };
