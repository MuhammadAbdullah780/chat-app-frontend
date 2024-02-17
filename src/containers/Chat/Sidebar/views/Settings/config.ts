import { ModalIds } from "@/components/modals/typings";
import { GlobalTabKeys } from "@/typings/enums/global-tab-keys";
import {
  IoImageOutline,
  IoInformationCircleOutline,
  IoNotificationsCircleOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { ChatListingViewMode } from "../../typings";
import { LuKeyRound, LuLock } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { PiKeyboard } from "react-icons/pi";

type SettingsTabTrigger = {
  icon: IconType;
  text: string;
  renderHR: boolean;
  isModalTrigger: boolean;
  modalId?: ModalIds;
  tabKey?: GlobalTabKeys;
  tabValue?: string;
};

export const settingsTabTriggers: SettingsTabTrigger[] = [
  {
    icon: IoNotificationsOutline,
    text: "Notifications",
    isModalTrigger: false,
    renderHR: true,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.NOTIFICATIONS,
  },
  {
    icon: LuLock,
    text: "Privacy",
    isModalTrigger: false,
    renderHR: true,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.PRIVACY,
  },
  {
    icon: LuKeyRound,
    text: "Security",
    isModalTrigger: false,
    renderHR: true,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.SECURITY,
  },
  {
    icon: IoImageOutline,
    text: "Chat Wallpaper",
    isModalTrigger: false,
    renderHR: true,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.CHAT_WALLPAPER,
  },
  {
    icon: CgNotes,
    text: "Request Account Info",
    isModalTrigger: false,
    renderHR: true,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.REQUEST_ACCOUNT_INFO,
  },
  {
    icon: PiKeyboard,
    text: "Keyboard Shortcuts",
    isModalTrigger: true,
    renderHR: true,
    modalId: ModalIds.KEYBOARD_SHORTCUTS_MODAL,
  },
  {
    icon: IoInformationCircleOutline,
    text: "Help",
    isModalTrigger: false,
    renderHR: false,
    tabKey: GlobalTabKeys.VIEW_MODE,
    tabValue: ChatListingViewMode.HELP,
  },
];
