import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar";
import { cn } from "@lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  image: string;
  username: string;
  lastMessageSentBy: string;
  lastMessage: string;
  lastMessageSentTime: Date | string;
  unreadMessageCount: number;
  conversationId: string;
};

const ConversationItem = ({
  image,
  conversationId,
  lastMessage,
  lastMessageSentBy,
  lastMessageSentTime,
  unreadMessageCount,
  username,
}: Props) => {
  const searchParams = useSearchParams();

  const isChatActive =
    searchParams?.has("chatId") &&
    searchParams.get("chatId") === conversationId;

  return (
    <Link
      href={`/chat?chatId=${conversationId}`}
      className={cn(
        "p-2 rounded-xl cursor-pointer w-full flex h-[70px] justify-between items-center",
        isChatActive ? "text-white bg-primary" : "bg-white ",
      )}>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback className="text-black">CN</AvatarFallback>
        </Avatar>
        <span>
          <p className="truncate block font-medium w-[100px] text-sm">
            {username}
          </p>
          <small className="text-xs truncate block w-[100px] text-[10px]">
            {lastMessage}
          </small>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs">12:40</span>
        {!isChatActive && (
          <span className="text-xs flex items-center font-semibold justify-center text-primary h-8 w-8 rounded-full bg-primary-foreground">
            {unreadMessageCount >= 100 ? " 99+" : unreadMessageCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ConversationItem;
