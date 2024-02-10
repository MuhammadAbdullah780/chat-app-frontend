import SidebarLayout from "@components/common/layout/SidebarLayout";
import ChatContainer from "@containers/Chat";
import { NextPageWithLayout } from "@typings/types/next-layout";

const ChatPage: NextPageWithLayout = () => {
  return <ChatContainer />;
};

ChatPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ChatPage;
