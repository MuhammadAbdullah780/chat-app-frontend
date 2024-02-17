import { ChatListingViewMode } from "@/containers/Chat/Sidebar/typings";
import { GlobalTabKeys } from "@/typings/enums/global-tab-keys";
import { IoSettingsOutline } from "react-icons/io5";

export const tabTriggerButtons = [
  {
    icon: IoSettingsOutline,
    targetQueryKey: GlobalTabKeys.VIEW_MODE,
    targetedVal: ChatListingViewMode.SETTINGS,
  },
];
