import { useSearchParams } from "next/navigation";
import React from "react";
import NoChat from "./NoChat";
import ChatContainer from "./ChatContainer";
import { useIsReady } from "@/utils/hooks/use-is-ready";

const IndividualChatContainer = () => {
  const chatId = useSearchParams().get("chatId");

  if (chatId) return <ChatContainer />;

  return <NoChat />;
};

export default IndividualChatContainer;
