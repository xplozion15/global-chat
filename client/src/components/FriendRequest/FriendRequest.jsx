import { sendFriendRequest } from "../../services/friendRequestServices";
import styles from "./FriendRequest.module.css";
import { useState } from "react";

const FriendRequest = () => {
  const [validationText, setValidationText] = useState("");
  const [username, setUsername] = useState("");

  const friendRequestHandler = async (e) => {
    e.preventDefault();

    try {
      let trimmedUsername = username.trim();
      const friendRequest = await sendFriendRequest(trimmedUsername);
      setValidationText(friendRequest.message);
    } catch (error) {
      console.error(error);
      setValidationText(error.message);
    }
  };

  return (
    <>
      <div className={styles.friendRequestContainer}>
        <div className={styles.addFriendContainer}>
          <label htmlFor="username" hidden>
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter a username"
            className={styles.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className={styles.addFriendBtn}
            onClick={friendRequestHandler}
          >
            Add friend
          </button>
        </div>

        <p className={styles.validationText}>{validationText}</p>
      </div>
    </>
  );
};

export { FriendRequest };
