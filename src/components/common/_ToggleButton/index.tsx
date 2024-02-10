import { cn } from "@lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithoutRef } from "react";

type Props<T extends React.ElementType> = VariantProps<
  typeof toggleButtonVariants
> & {
  as?: T;
  children?: React.ReactNode;
};

const toggleButtonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      isActive: {
        false:
          "border text-gray-600 border-text-gray-600 bg-background hover:bg-accent",
        true: "border border-primary hover:bg-primary-foreground bg-transparent text-primary",
      },
      size: {
        default: "h-10 p-2",
        sm: "h-9 px-3",
        icon: "h-10 w-10",
      },
      isRounded: {
        true: "rounded-full",
        false: "rounded-sm sm:rounded-md",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      isActive: false,
      isRounded: true,
      size: "default",
    },
  },
);

const ToggleButton = <T extends React.ElementType>({
  as,
  children,
  isActive,
  isRounded,
  size,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>) => {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={cn(
        "",
        toggleButtonVariants({ isActive, isRounded, size }),
        props?.className,
      )}>
      {children}
    </Component>
  );
};

export default ToggleButton;
