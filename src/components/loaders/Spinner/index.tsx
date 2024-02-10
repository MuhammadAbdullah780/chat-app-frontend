import React from "react";
import Flex from "@components/common/Flex";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Props = VariantProps<typeof variants> & {
  className?: string;
  wrapperClassName?: string;
};

const variants = cva(
  "animate-spin inline-block border-[3px] border-current border-t-transparent text-primary rounded-full",
  {
    variants: {
      size: {
        small: "w-6 h-6",
        middle: "w-8 h-8",
        large: "w-12 h-12",
      },
    },
    defaultVariants: {
      size: "middle",
    },
  },
);

const Spinner = ({ size, className, wrapperClassName }: Props) => {
  return (
    <Flex
      align="center"
      justify="center"
      className={cn("w-full h-full", wrapperClassName)}>
      <div className={cn([variants({ size }), className])} aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </Flex>
  );
};

export default Spinner;
