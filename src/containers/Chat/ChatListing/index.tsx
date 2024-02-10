import ConversationItemSkeleton from "@/components/loaders/ConversationItemSkeleton";
import ConversationItem from "@components/common/ConversationItem";
import { chatConversationList } from "@site-data/chat/listing";

const ChatListing = () => {
  const isLoading = false;

  if (isLoading) {
    return [1, 2, 3, 4, 5].map((item) => (
      <ConversationItemSkeleton key={item} />
    ));
  }

  return chatConversationList.map((item, i) => {
    return (
      <ConversationItem
        conversationId={item.id}
        image={item.img}
        lastMessage={item.lastMessageInfo.message}
        lastMessageSentBy={item.lastMessageInfo.author}
        lastMessageSentTime={item.lastMessageInfo.lastMessageTimestamp}
        unreadMessageCount={item.unreadMessageCount}
        username={item.username}
        key={i}
      />
    );
  });
};

export default ChatListing;
