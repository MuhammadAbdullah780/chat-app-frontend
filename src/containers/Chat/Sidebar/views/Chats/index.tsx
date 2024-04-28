import ListingTitle from "@/containers/Chat/Title";
import React from "react";
import SearchInput from "./SearchInput";
import { Separator } from "@/components/ui/Seperator";
import { ScrollArea } from "@/components/ui/ScrollArea";
import Flex from "@/components/common/Flex";
import ChatListing from "./ChatListing";

type Props = {};

const ChatsView = (props: Props) => {
  return (
    <>
      <ListingTitle text="Chats" />
      {/* Search Bar */}
      <SearchInput />
      <Separator />
      {/* MAPPING THE CONVERSATION LISTS */}
      <ScrollArea className="w-full flex-1 gap-2 pr-3 h-screen">
        <Flex vertical className="gap-3">
          <ChatListing />
        </Flex>
      </ScrollArea>
    </>
  );
};

export default ChatsView;
