import withAuth from "@/components/HOC/withAuth";
import { NextPageWithLayout } from "@/typings/types/next-layout.type";
import SidebarLayout from "@components/common/layout/SidebarLayout";
import ChatContainer from "@containers/Chat";

const ChatPage: NextPageWithLayout = () => {
  return <ChatContainer />;
};

ChatPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ChatPage;
