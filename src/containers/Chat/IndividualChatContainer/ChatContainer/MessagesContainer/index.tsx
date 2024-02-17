import Flex from "@/components/common/Flex";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { messagesData } from "@/site-data/chat/messages-data";
import Message from "./Message";

const MessagesContainer = () => {
  return (
    <ScrollArea className="p-3 bg-primary-foreground h-[80vh] w-full">
      <Flex className="gap-5" vertical>
        {messagesData.map((item, i) => (
          <Message
            message_type={item.message_type}
            key={i}
            is_sent_by_me={item.is_sent_by_me}
            content={item.content}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default MessagesContainer;
