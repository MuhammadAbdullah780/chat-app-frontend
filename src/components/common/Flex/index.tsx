import { VariantProps } from "class-variance-authority";
import React, { ComponentPropsWithoutRef } from "react";
import {
  flexBaseVariants,
  flexLgVariants,
  flexMdVariants,
  flexSmVariants,
} from "@components/common/Flex/variants";
import { cn } from "@lib/utils";

type Props<T extends React.ElementType> = VariantProps<
  typeof flexBaseVariants
> & {
  as?: T;
  children?: React.ReactNode;
  sm?: VariantProps<typeof flexSmVariants>;
  md?: VariantProps<typeof flexMdVariants>;
  lg?: VariantProps<typeof flexLgVariants>;
};

const Flex = <T extends React.ElementType = "div">({
  as,
  children,
  align,
  justify,
  lg,
  md,
  sm,
  vertical,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>) => {
  const Component = as || "div";

  const customizedClassName = cn([
    flexBaseVariants({ align, justify, vertical }),
    flexSmVariants({ ...sm }),
    flexMdVariants({ ...md }),
    flexLgVariants({ ...lg }),
    props?.className,
  ]);

  return (
    <Component {...props} className={customizedClassName}>
      {children}
    </Component>
  );
};

export default Flex;
