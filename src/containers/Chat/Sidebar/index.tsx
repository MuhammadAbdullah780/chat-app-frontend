import Flex from "@/components/common/Flex";
import GlobalTabWrapper from "@/components/common/GlobalTabWrapper";
import React from "react";
import { sideBarTabConfig } from "./config";
import { useGlobalTabValidation } from "@/utils/hooks/use-global-tabs-validator";

const ChatSidebar: React.FC = () => {
  return (
    <Flex vertical className="gap-4 w-full p-4 h-screen">
      <GlobalTabWrapper tabKey="view_mode" tabsConfig={sideBarTabConfig} />
    </Flex>
  );
};

export default ChatSidebar;
