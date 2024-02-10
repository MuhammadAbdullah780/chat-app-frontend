import Flex from "@components/common/Flex";
import ChatHeader from "./ChatHeader";
import CreateMessageForm from "./CreateMessageForm";
import MessagesContainer from "./MessagesContainer";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
];

const ChatContainer = () => {
  return (
    <Flex vertical className="bg-white h-full min-h-screen">
      <ChatHeader />
      <MessagesContainer />
      <CreateMessageForm />
    </Flex>
  );
};

export default ChatContainer;
