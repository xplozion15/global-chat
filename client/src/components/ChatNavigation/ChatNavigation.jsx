import { Link } from "react-router";
import styles from "./ChatNavigation.module.css";
import { MessageCircleCode } from "lucide-react";
import { UserStar } from "lucide-react";
import { BellDot } from "lucide-react";
import { Send } from "lucide-react";
import { NotificationBadge } from "../NotificationBadge/NotificationBadge";
import { MessageCircleHeart } from "lucide-react";
import { Settings } from "lucide-react";
import { NotificationPanel } from "../NotificationPanel/NotificationPanel";
import { useState } from "react";

const ChatNavigation = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <div className={styles.chatNavigationContainer}>
        <div className={styles.chatNavigationTop}>
          <h2 className={styles.logo}>
            Global chat. <MessageCircleHeart />
          </h2>
          <Link to="/chats">
            <MessageCircleCode />
            Chatrooms
          </Link>

          <Link to="/dms">
            <Send />
            DMs
          </Link>

          <Link to="/friends">
            <UserStar />
            Friends
          </Link>
        </div>

        <div className={styles.chatNavigationBottom}>
          <button
            className={styles.notificationButton}
            onClick={() => {
              setShowNotifications((prevState) => !prevState);
            }}
          >
            <BellDot />
            Notifications
            <NotificationBadge />
            {showNotifications && <NotificationPanel />}
          </button>
          <div className={styles.profileElement}>
            <div className={styles.sidebarUserInfo}>
              <img
                src="https://res.cloudinary.com/dkidfx99m/image/upload/v1719927101/cui0bm8jfffqmoeh7rya.jpg"
                alt="user"
                className={styles.userImage}
              />
              <p>Xplozion</p>
            </div>
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
};

export { ChatNavigation };
