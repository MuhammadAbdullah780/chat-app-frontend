import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import React from "react";
import { MdSend } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegFaceSmile } from "react-icons/fa6";

type Props = {};

const CreateMessageForm = (props: Props) => {
  return (
    <Flex className="p-3 h-[10vh] gap-3 w-full">
      <div className="relative flex-1">
        <Input placeholder="Enter Message to Send..." />
        <IconWrapper
          icon={FaRegFaceSmile}
          className="absolute right-4 bottom-2 text-gray-400 cursor-pointer"
        />
      </div>
      <Button size="icon" className={cn("scale-on-tap", "active:scale-[0.95]")}>
        <IconWrapper
          allowScalingWhileTap={false}
          className="text-white"
          icon={MdSend}
        />
      </Button>
    </Flex>
  );
};

export default CreateMessageForm;
