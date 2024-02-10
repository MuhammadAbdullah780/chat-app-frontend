import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import React from "react";

type Props = {
  text: string;
  subText: string;
  image?: string;
};

const UserInfo = ({ subText, text, image }: Props) => {
  const generatedAlt = text.toUpperCase().slice(0, 2);

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback className="text-black">{generatedAlt}</AvatarFallback>
      </Avatar>
      <span>
        <p className="truncate block font-medium w-[100px] text-sm">{text}</p>
        <small className="text-xs truncate block w-[100px] text-[10px]">
          {subText}
        </small>
      </span>
    </div>
  );
};

export default UserInfo;
