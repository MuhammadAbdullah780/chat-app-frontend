import { Skeleton } from "@/components/ui/Skeleton";
import React from "react";

const ConversationItemSkeleton = () => {
  return (
    <div className="p-2 rounded-xl w-full bg-white cursor-pointer flex h-[70px] justify-between items-center">
      <div className="flex items-center gap-2">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[100px] h-4" />
          <Skeleton className="w-[70px] h-3" />
        </div>
      </div>
    </div>
  );
};

export default ConversationItemSkeleton;
