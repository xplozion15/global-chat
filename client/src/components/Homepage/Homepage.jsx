import { ChatNavigation } from "../ChatNavigation/ChatNavigation";
import { ConversationList } from "../ConversationList/ConversationList";
import { ConversationView } from "../ConversationView/ConversationView";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <main className={styles.homepage}>
        <ChatNavigation />
        <ConversationList />
        <ConversationView />
      </main>
    </>
  );
};

export { Homepage };
