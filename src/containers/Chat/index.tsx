import Spinner from "@/components/common/Spinner";
import { useAppSelector } from "@/store/hooks";
import { useGlobalTabValidation } from "@/utils/hooks/use-global-tabs-validator";
import Flex from "@components/common/Flex";
import IndividualChatContainer from "./IndividualChatContainer";
import ChatSidebar from "./Sidebar";
import { ChatListingViewMode } from "./Sidebar/typings";
import { useUpdateEffect } from "@/utils/hooks/use-update-effect";
import { GlobalTabKeys } from "@/typings/enums/global-tab-keys";

const ChatContainer = () => {
  // const loading = !useAppSelector((state) => state.ui.globalTabs.initialCheck);

  // useGlobalTabValidation({
  //   params: [
  //     {
  //       tabKey: GlobalTabKeys.VIEW_MODE,
  //       possibilities: Object.values(ChatListingViewMode),
  //       fallback: ChatListingViewMode.CHATS,
  //     },
  //   ],
  // });

  return (
    <Flex className="w-full h-screen">
      <section className="min-w-[350px] border bg-primary-foreground">
        <ChatSidebar />
      </section>
      <section className="flex-1">
        <IndividualChatContainer />
      </section>
    </Flex>
  );
};

export default ChatContainer;
