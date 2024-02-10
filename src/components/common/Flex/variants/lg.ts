import { cva } from "class-variance-authority";

export const flexLgVariants = cva("", {
  variants: {
    align: {
      center: "lg:items-center",
      start: "lg:items-start",
      end: "lg:items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "lg:justify-center",
      start: "lg:justify-start",
      end: "lg:justify-end",
      between: "lg:justify-between",
      around: "lg:justify-around",
      evenly: "lg:justify-evenly",
    },
    vertical: {
      false: "lg:flex-row",
      true: "lg:flex-col",
    },
  },
});
