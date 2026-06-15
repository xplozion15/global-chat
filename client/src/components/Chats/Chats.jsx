import { Outlet } from "react-router";
import { ChatConversationList } from "../ChatConversationList/ChatConversationList";
import { useParams } from "react-router";

const Chats = () => {
  const { chatroomId } = useParams();
  return (
    <>
      <ChatConversationList />
      <Outlet context={{chatroomId}} />
    </>
  );
};

export { Chats };
