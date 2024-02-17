import Flex from "@/components/common/Flex";
import ImageWrapper from "@/components/common/ImageWrapper";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { DEFAULT_IMAGE_URL } from "@/utils/constants";
import React from "react";

type Props = {};

const ImageMessage = (props: Props) => {
  const imagesArr = [
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
    "/NoChat.png",
  ];

  if (imagesArr?.length > 2) {
    return (
      <Flex className="gap-2">
        {imagesArr.slice(0, 2).map((item, i) => {
          return (
            <ImageWrapper
              src={item}
              wrapperClassName="w-[120px] h-[120px] object-cover rounded-2xl overflow-hidden"
              key={i}
              alt="hi"
            />
          );
        })}
        <Flex
          align="center"
          justify="center"
          className="font-semibold text-lg transition-colors duration-100 w-[120px] h-[120px] hover:bg-gray-200 bg-gray-300 text-gray-500 rounded-2xl">{`+ ${
          imagesArr.length - 2
        }`}</Flex>
      </Flex>
    );
  }
  <h1>asas</h1>;
};

export default ImageMessage;
