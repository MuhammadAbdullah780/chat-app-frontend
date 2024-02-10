import { useSearchParams } from "next/navigation";
import React from "react";
import NoChat from "./NoChat";
import ChatContainer from "./ChatContainer";

const IndividualChatContainer = () => {
  const chatId = useSearchParams().get("chatId");

  if (!chatId) return <NoChat />;

  return <ChatContainer />;
};

export default IndividualChatContainer;
