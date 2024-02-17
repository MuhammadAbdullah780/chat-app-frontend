import IconWrapper from "@components/common/IconWrapper";
import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";

export const navigationListData = [
  {
    href: "/chat",
    icon: <IconWrapper icon={IoChatbubbleOutline} />,
    matcher: ["/chat"],
  },
];
