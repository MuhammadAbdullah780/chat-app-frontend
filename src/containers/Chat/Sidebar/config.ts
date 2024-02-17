import { GlobalTabList } from "@/typings/types/global-tabs";
import ChatsView from "./views/Chats";
import NotifcationView from "./views/Notifications";
import SettingsView from "./views/Settings";
import { ChatListingViewMode } from "./typings";
import ChatWallpaperView from "./views/ChatWallpaper";
import HelpView from "./views/Help";
import PrivacyView from "./views/Privacy";
import RequestAccountInfoView from "./views/RequestAccountInfo";
import SecurityView from "./views/Security";

const {
  SETTINGS,
  NOTIFICATIONS,
  CHATS,
  CHAT_WALLPAPER,
  HELP,
  PRIVACY,
  REQUEST_ACCOUNT_INFO,
  SECURITY,
} = ChatListingViewMode;

export const sideBarTabConfig: GlobalTabList = [
  {
    id: SETTINGS,
    component: SettingsView,
  },
  {
    id: NOTIFICATIONS,
    component: NotifcationView,
  },
  {
    id: undefined as any,
    component: ChatsView,
  },
  {
    id: CHATS,
    component: ChatsView,
  },
  {
    id: CHAT_WALLPAPER,
    component: ChatWallpaperView,
  },
  {
    id: HELP,
    component: HelpView,
  },
  {
    id: PRIVACY,
    component: PrivacyView,
  },
  {
    id: REQUEST_ACCOUNT_INFO,
    component: RequestAccountInfoView,
  },
  {
    id: SECURITY,
    component: SecurityView,
  },
];
