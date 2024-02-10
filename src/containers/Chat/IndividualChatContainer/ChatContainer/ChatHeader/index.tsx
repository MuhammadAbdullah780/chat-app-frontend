import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import UserInfo from "@/components/common/UserInfo";
import { DEFAULT_IMAGE_URL } from "@/utils/constants";
import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ChatHeader = () => {
  const router = useRouter();

  const handleCloseChat = () => {
    router.push({ query: {} }, undefined, { shallow: true });
  };

  return (
    <Flex align="center" justify="between" className="p-3 h-[10vh]">
      <Flex align="center" className="gap-3">
        <IconWrapper
          onClick={handleCloseChat}
          className="text-gray-400"
          icon={IoIosArrowBack}
        />
        <UserInfo text="Username" subText="online" image={DEFAULT_IMAGE_URL} />
      </Flex>
    </Flex>
  );
};

export default ChatHeader;
