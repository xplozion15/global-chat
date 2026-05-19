import { Link } from "react-router";
import styles from "./ChatNavigation.module.css";
import { MessageCircleCode } from "lucide-react";
import { UserStar } from "lucide-react";
import { BellDot } from "lucide-react";
import { Send } from "lucide-react";
import { User } from "lucide-react";
import { NotificationBadge } from "../NotificationBadge/NotificationBadge";
import { MessageCircleHeart } from "lucide-react";
import { Settings } from "lucide-react";

const ChatNavigation = () => {
  return (
    <div className={styles.chatNavigationContainer}>
      <div className={styles.chatNavigationTop}>
        <h2 className={styles.logo}>
          Global chat. <MessageCircleHeart />
        </h2>
        <Link>
          <MessageCircleCode />
          Chatrooms
        </Link>

        <Link>
          <Send />
          DMs
        </Link>

        <Link>
          <UserStar />
          Friends
        </Link>
      </div>

      <div className={styles.chatNavigationBottom}>
        <Link>
          <BellDot />
          Notifications
          <NotificationBadge />
        </Link>
        <div className={styles.profileElement}>
          <div className={styles.sidebarUserInfo}>
            <User />
            <p>Xplozion</p>
          </div>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export { ChatNavigation };
