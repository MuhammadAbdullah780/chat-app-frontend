import { cva } from "class-variance-authority";

export const flexSmVariants = cva("", {
  variants: {
    align: {
      center: "sm:items-center",
      start: "sm:items-start",
      end: "sm:items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "sm:justify-center",
      start: "sm:justify-start",
      end: "sm:justify-end",
      between: "sm:justify-between",
      around: "sm:justify-around",
      evenly: "sm:justify-evenly",
    },
    vertical: {
      false: "sm:flex-row",
      true: "sm:flex-col",
    },
  },
});
