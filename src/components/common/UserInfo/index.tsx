import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  text: string;
  subText: string;
  image?: string;
  inBetweenSpacing?: "default" | "lg" | "sm";
  allowEllipsis?: boolean;
  ellipsisWidth?: string;
};

const UserInfo = ({
  subText,
  text,
  image,
  inBetweenSpacing = "default",
  allowEllipsis = true,
  ellipsisWidth = "100px",
}: Props) => {
  const generatedAlt = text.toUpperCase().slice(0, 2);

  return (
    <div
      className={cn([
        "flex items-center gap-3",
        inBetweenSpacing === "lg" && "gap-5",
        inBetweenSpacing === "default" && "gap-3",
        inBetweenSpacing === "sm" && "gap-2",
      ])}>
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback className="text-black">{generatedAlt}</AvatarFallback>
      </Avatar>
      <span>
        <p
          className={cn(
            ["block font-medium text-sm"],
            allowEllipsis && `truncate w-[${ellipsisWidth}]`,
          )}>
          {text}
        </p>
        <small className="text-xs truncate block w-[100px] text-[10px]">
          {subText}
        </small>
      </span>
    </div>
  );
};

export default UserInfo;
