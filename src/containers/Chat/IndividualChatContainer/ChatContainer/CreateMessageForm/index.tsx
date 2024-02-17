import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { FaRegFaceSmile } from "react-icons/fa6";
import { MdSend } from "react-icons/md";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Form, FormField } from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { useKeyPress } from "@/utils/hooks/use-key-press";

type Props = {};

const CreateMessageForm = (props: Props) => {
  // Form
  const form = useForm();
  const { handleSubmit, control, getValues, setValue } = form;
  const isLoading = false;

  const submitForm = (data: any) => {
    console.log(data, "DATA");
  };
  const handleEmojiClick = (data: EmojiClickData) => {
    setValue("text", `${(getValues("text") || "") + " " + data.emoji}`, {
      shouldDirty: true,
    });
  };

  return (
    <Flex className="p-3 h-[10vh] gap-3 w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(submitForm)} className="relative flex-1">
          <FormField
            name="text"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <Input {...field} placeholder="Enter Message to Send..." />
                  <Popover>
                    <PopoverTrigger className="absolute right-4 bottom-2 text-gray-400 cursor-pointer">
                      <IconWrapper icon={FaRegFaceSmile} />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit h-fit" align="end">
                      <EmojiPicker
                        onEmojiClick={(emoji) => handleEmojiClick(emoji)}
                        lazyLoadEmojis={true}
                      />
                    </PopoverContent>
                  </Popover>
                </>
              );
            }}
          />
        </form>
      </Form>
      <Button size="icon" className={cn("scale-on-tap", "active:scale-[0.95]")}>
        {isLoading ? (
          <Spinner size="extra_small" />
        ) : (
          <IconWrapper
            allowScalingWhileTap={false}
            className="text-white"
            icon={MdSend}
          />
        )}
      </Button>
    </Flex>
  );
};

export default CreateMessageForm;
