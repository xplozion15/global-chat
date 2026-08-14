import styles from "./Message.module.css";
import { Ellipsis } from "lucide-react";
import { MessageMenu } from "../MessageMenu/MessageMenu";
import { useState } from "react";
import { Profile } from "../Profile/Profile";
import { getProfile } from "../../services/profileServices";
import { useRef, useEffect } from "react";

const Message = ({ message }) => {
  const [showMessageMenu, setShowMessageMenu] = useState(false);
  const [profileInfo, setProfileInfo] = useState(null);
  const profileDialogRef = useRef(null);
  console.log(message);

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

  return (
    <>
      <div className={styles.message}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9gJACNLV5RJ5RC8Me7u3GRvAQ-w8DHNqNw&s"
          alt="Profile Avatar"
          className={styles.messagePfp}
          onClick={() => handleProfileClick(message.sender.id)}
          className={styles.messagePfp}
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
            <img src={message.imageUrl} alt="chat-image" loading="lazy" className={styles.chatImage}/>
          )}

          {/* <p className={styles.replyMessage}>this is a sample reply</p> */}
          {/* <div className={styles.messageReactionContainer}>
            <div className={styles.messageReaction}>😭 1</div>
            <div className={styles.messageReaction}>😂 3</div>
          </div> */}
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
