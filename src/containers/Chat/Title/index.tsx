import React from "react";

type Props = {
  text: string;
};

const ChatListingTitle = ({ text }: Props) => {
  return <h1 className="text-lg font-semibold text-primary">{text}</h1>;
};

export default ChatListingTitle;
