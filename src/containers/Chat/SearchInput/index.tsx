import IconWrapper from "@components/common/IconWrapper";
import { Input } from "@components/ui/Input";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <div className="bg-white w-full relative">
      <Input placeholder="Search..." className="rounded-xl" />
      <IconWrapper
        size={15}
        icon={IoFilterSharp}
        className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 hover:text-primary"
      />
    </div>
  );
};

export default SearchInput;
