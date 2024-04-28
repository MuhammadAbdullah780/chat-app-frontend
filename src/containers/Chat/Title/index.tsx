import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import { useAppDispatch } from "@/store/hooks";
import { goPreviousTab } from "@/store/slices/ui/global-tabs.slice";
import { GlobalTabKeys } from "@/typings/enums/global-tab-keys";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { IconType } from "react-icons/lib";

type Props = {
  text: string;
  icon?: boolean;
};

const ListingTitle = ({ text, icon = true }: Props) => {
  const dispatch = useAppDispatch();

  const handlePrev = () => {
    dispatch(goPreviousTab({ key: GlobalTabKeys.VIEW_MODE }));
  };

  return (
    <Flex
      align="center"
      justify="center"
      as="h1"
      className="text-lg font-semibold text-gray-600 gap-2">
      {icon && <IconWrapper icon={GrFormPrevious} onClick={handlePrev} />}
      {text}
    </Flex>
  );
};

export default ListingTitle;
