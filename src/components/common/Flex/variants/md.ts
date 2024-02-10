import { cva } from "class-variance-authority";

export const flexMdVariants = cva("", {
  variants: {
    align: {
      center: "md:items-center",
      start: "md:items-start",
      end: "md:items-end",
      stretch: "items-stretch",
    },
    justify: {
      center: "md:justify-center",
      start: "md:justify-start",
      end: "md:justify-end",
      between: "md:justify-between",
      around: "md:justify-around",
      evenly: "md:justify-evenly",
    },
    vertical: {
      false: "md:flex-row",
      true: "md:flex-col",
    },
  },
});
