import { cn } from "@/lib/utils";
import { IconBaseProps, IconType } from "react-icons/lib";

type Props = IconBaseProps & {
  icon: IconType;
  allowScalingWhileTap?: boolean;
};

const IconWrapper = ({
  icon,
  allowScalingWhileTap = true,
  className,
  ...props
}: Props) => {
  const Component = icon;

  return (
    <Component
      size={20}
      {...props}
      className={cn([allowScalingWhileTap && "scale-on-tap", className])}
    />
  );
};

export default IconWrapper;
