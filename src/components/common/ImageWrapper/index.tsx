import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

const ImageWrapper = ({
  alt,
  imageClassName,
  src,
  wrapperClassName,
}: Props) => {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <Image
        layout="fill"
        src={src}
        alt={alt}
        className={cn("absolute", imageClassName)}
      />
    </div>
  );
};

export default ImageWrapper;
