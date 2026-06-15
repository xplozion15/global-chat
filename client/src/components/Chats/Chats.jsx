import { Outlet } from "react-router";
import { ChatConversationList } from "../ChatConversationList/ChatConversationList";

const Chats = () => {
  return (
    <>
      <ChatConversationList />
      <Outlet />
    </>
  );
};

export { Chats };
