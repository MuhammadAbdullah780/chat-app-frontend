import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { IconType } from "react-icons/lib";

type Props = {
  text: string;
  icon?: boolean;
  onIconClick?: () => void;
};

const ListingTitle = ({ text, icon, onIconClick }: Props) => {
  return (
    <Flex
      align="center"
      justify="center"
      as="h1"
      className="text-lg font-semibold text-gray-600 gap-2">
      {icon && <IconWrapper icon={GrFormPrevious} onClick={onIconClick} />}
      {text}
    </Flex>
  );
};

export default ListingTitle;
