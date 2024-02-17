import Flex from "@/components/common/Flex";
import ImageWrapper from "@/components/common/ImageWrapper";

type Props = {};

const NoChat = (props: Props) => {
  return (
    <Flex vertical align="center" justify="center" className="h-screen gap-4">
      <ImageWrapper
        src="/NoChat.png"
        alt="No Chat"
        wrapperClassName="w-[287px] h-[287px]"
      />
      <p>
        Select a conversation or start a{" "}
        <span className="text-primary link scale-on-tap font-medium">
          new one
        </span>
      </p>
    </Flex>
  );
};

export default NoChat;
