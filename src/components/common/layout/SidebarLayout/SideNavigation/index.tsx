import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar";
import { Separator } from "@components/ui/Seperator";
import { useId } from "react";
import IconWrapper from "@components/common/IconWrapper";
import { RiLogoutBoxLine } from "react-icons/ri";
import { navigationListData } from "@site-data/layout/navigation-data";
import NavigationLink from "@components/common/NavigationLink";
import { tabTriggerButtons } from "@/site-data/layout/tab-trigger-buttons";
import { useGlobalTabFunctions } from "@/utils/hooks/use-global-tab-functions";
import { useAppSelector } from "@/store/hooks";

const SideNavigation: React.FC = () => {
  const { openTab, changeTab } = useGlobalTabFunctions();

  const activeTab = useAppSelector((state) => state.ui.globalTabs.activeTabs);

  const handleTabOpen = (key: string, val: string) => {
    if (activeTab?.[key] === val) return;

    activeTab?.[key] ? openTab({ key, val }) : changeTab({ key, val });
  };

  return (
    <nav className="flex items-center transition-all ease-in duration-300 shadow-md flex-col px-2 py-4 gap-5 min-h-full max-w-[70px]">
      {/* USER AVATAR */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* SEPERATOR */}
      <Separator />

      {/* NAVIGATION ICONS */}
      <>
        {navigationListData.map((item, i) => (
          <NavigationLink
            matcher={item?.matcher}
            href={item?.href}
            text="Text Applied"
            key={i}
            icon={item.icon}
          />
        ))}
      </>

      {/* SEPERATOR */}
      <Separator />

      {/* BUTTONS THAT TRIGGERS GLOBAL TABS */}
      <>
        {tabTriggerButtons.map((item, i) => (
          <button
            key={i}
            onClick={() => handleTabOpen(item.targetQueryKey, item.targetedVal)}
            className="navigation-list-item text-gray-400">
            <IconWrapper icon={item.icon} />
          </button>
        ))}
      </>

      {/* EXTRA BUTTONS */}
      {/* LOGOUT */}
      <button className="navigation-list-item text-gray-400">
        <IconWrapper icon={RiLogoutBoxLine} />
      </button>

      {/* TODO: LATER ON  */}
      {/* EXPAND */}
      {/* <button
        onClick={() => toggleFunc()}
        className="navigation-list-item text-gray-400 flex">
        <AiOutlineHome size={20} />
      </button> */}
    </nav>
  );
};

export default SideNavigation;
