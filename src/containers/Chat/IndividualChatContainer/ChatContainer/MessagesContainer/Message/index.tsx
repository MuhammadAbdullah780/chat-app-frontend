import Flex from "@/components/common/Flex";
import { cn } from "@/lib/utils";
import { MessageType } from "@/typings/enums/chat";
import React from "react";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";

type Props = {
  is_sent_by_me: boolean;
  content?: string;
  message_type: MessageType;
  images?: string[];
};

const Message: React.FC<Props> = ({ is_sent_by_me, content, message_type }) => {
  return (
    <Flex justify={is_sent_by_me ? "end" : "start"} className="w-full py-2">
      <Flex className="w-fit gap-2" vertical>
        {(() => {
          switch (message_type) {
            case MessageType.TEXT:
              return (
                <TextMessage content={content!} is_sent_by_me={is_sent_by_me} />
              );

            case MessageType.IMAGE:
              return <ImageMessage />;

            default:
              return <></>;
          }
        })()}
        {/* REACTIONS */}
        <Flex
          className="gap-3 w-full"
          justify={is_sent_by_me ? "start" : "end"}>
          <small className="text-xs font-semibold">12:09</small>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Message;
