import IconWrapper from "@/components/common/IconWrapper";
import { Input } from "@/components/ui/Input";
import Flex from "@components/common/Flex";
import { ScrollArea } from "@components/ui/ScrollArea";
import { Separator } from "@components/ui/Seperator";
import { signInUser } from "@services/auth";
import { useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";
import ChatListing from "./ChatListing";
import ChatListingTitle from "./Title";
import SearchInput from "./SearchInput";
import IndividualChatContainer from "./IndividualChatContainer";

const ChatContainer = () => {
  useEffect(() => {
    signInUser();
  }, []);

  return (
    <Flex className="w-full h-screen">
      <section className="min-w-[350px] border bg-primary-foreground">
        <Flex vertical className="gap-4 w-full p-4 h-screen">
          <ChatListingTitle text="Chats" />
          {/* Search Bar */}
          <SearchInput />
          <Separator />
          {/* MAPPING THE CONVERSATION LISTS */}
          <ScrollArea className="w-full flex-1 gap-2 pr-3 h-screen">
            <Flex vertical className="gap-3">
              <ChatListing />
            </Flex>
          </ScrollArea>
        </Flex>
      </section>
      <section className="flex-1">
        <IndividualChatContainer />
      </section>
    </Flex>
  );
};

export default ChatContainer;
