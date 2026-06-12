import { Outlet } from "react-router";
import { ChatConversationList } from "../ChatConversationList/ChatConversationList";
import { useParams } from "react-router";

const Chats = () => {
  const { chatId } = useParams();
  return (
    <>
      <ChatConversationList />
      <Outlet context={{chatId}} />
    </>
  );
};

export { Chats };
