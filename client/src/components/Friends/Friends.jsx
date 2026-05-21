import { FriendsList } from "../FriendsList/FriendsList";
import { FriendsConversationView } from "../FriendsConversationView/FriendsConversationView";

const Friends = () => {
  return (
    <>
      <FriendsList />
      <FriendsConversationView />
    </>
  );
};

export { Friends };
