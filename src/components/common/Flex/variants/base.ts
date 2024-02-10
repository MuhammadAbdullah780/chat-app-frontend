import { cva } from "class-variance-authority";

export const flexBaseVariants = cva("flex", {
  variants: {
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    vertical: {
      true: "flex-col",
      false: "flex-row",
    },
  },
  defaultVariants: {
    align: "start",
    justify: "start",
    vertical: false,
  },
});
