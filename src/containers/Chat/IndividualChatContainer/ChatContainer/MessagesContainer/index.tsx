import { ScrollArea } from "@/components/ui/ScrollArea";
import React from "react";

type Props = {};

const MessagesContainer = (props: Props) => {
  return (
    <ScrollArea className="gap-4 p-3 bg-primary-foreground h-[80vh] w-full">
      {[].map((item) => (
        <h1 key={item}>asass</h1>
      ))}
    </ScrollArea>
  );
};

export default MessagesContainer;
