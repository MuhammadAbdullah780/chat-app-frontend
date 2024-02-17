import { DialogHeader } from "@/components/ui/Dialog";
import React from "react";

type Props = {
  text: string;
};

const ModalTitle: React.FC<Props> = ({ text }) => {
  return (
    <DialogHeader className="font-bold text-[#424242] leading-5 text-base">
      {text}
    </DialogHeader>
  );
};

export default ModalTitle;
