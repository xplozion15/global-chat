import { ChatConversationList } from "../ChatConversationList/ChatConversationList";
import { ChatConversationView } from "../ChatConversationView/ChatConversationView";

const Chats = () => {
  return (
    <>
      <ChatConversationList />
      <ChatConversationView />
    </>
  );
};

export { Chats };
