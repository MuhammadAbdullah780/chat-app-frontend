import { useAppSelector } from "@/store/hooks";
import React from "react";

type Props = {
  tabsConfig: {
    id: string;
    component: React.FC;
  }[];

  tabKey?: string;
};

const GlobalTabWrapper: React.FC<Props> = ({ tabsConfig, tabKey }) => {
  const tabs = useAppSelector((state) => state.ui.globalTabs.activeTabs);

  const Component = tabsConfig.find(
    (item) => item.id === tabs?.[tabKey!]?.current,
  )?.component!;

  return <Component />;
};

export default GlobalTabWrapper;
