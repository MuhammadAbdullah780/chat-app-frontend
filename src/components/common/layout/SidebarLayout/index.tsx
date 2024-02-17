import React from "react";
import SideNavigation from "@components/common/layout/SidebarLayout/SideNavigation";
import Flex from "@components/common/Flex";

type Props = {
  children: React.ReactNode;
};

const SidebarLayout = ({ children }: Props) => {
  return (
    <Flex as="main" className="w-full h-screen overflow-hidden">
      <header className="h-screen">
        <SideNavigation />
      </header>
      {children}
    </Flex>
  );
};
export default SidebarLayout;
