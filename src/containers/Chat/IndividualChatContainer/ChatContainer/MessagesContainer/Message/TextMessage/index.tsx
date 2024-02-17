import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  content: string;
  is_sent_by_me: boolean;
};

const TextMessage: React.FC<Props> = ({ content, is_sent_by_me }) => {
  return (
    <div
      className={cn([
        "px-4 py-2 rounded-lg font-semibold",
        is_sent_by_me ? "text-white bg-primary" : "text-gray-600 bg-white",
      ])}>
      {content}
    </div>
  );
};

export default TextMessage;
