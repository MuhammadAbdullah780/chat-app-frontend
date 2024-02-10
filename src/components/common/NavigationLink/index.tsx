import { cn } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  icon: React.ReactNode;
  matcher: string[];
  href: string;
  text?: string;
};

const NavigationLink: React.FC<Props> = ({ href, icon, matcher, text }) => {
  const pathname = usePathname();
  const isActive = matcher?.includes(pathname);

  return (
    <Link
      href={href!}
      className={cn(
        "navigation-list-item overflow-hidden",
        isActive
          ? "text-primary bg-primary-foreground w-full"
          : "text-gray-400 w-[50px]",
      )}>
      {icon}
    </Link>
  );
};

export default NavigationLink;
