import Flex from "@/components/common/Flex";
import ListingTitle from "@/containers/Chat/Title";
import React from "react";
import { goPrevViewMode } from "../../function";
import UserInfo from "@/components/common/UserInfo";
import { DEFAULT_IMAGE_URL } from "@/utils/constants";
import { settingsTabTriggers } from "./config";
import { Separator } from "@/components/ui/Seperator";
import IconWrapper from "@/components/common/IconWrapper";
import { useGlobalTabFunctions } from "@/utils/hooks/use-global-tab-functions";
import { useModal } from "@/components/modals/hook";
import ModalTrigger from "@/components/modals/components/ModalTrigger";

type Props = {};

const SettingsView = (props: Props) => {
  const { changeTab } = useGlobalTabFunctions();

  return (
    <Flex vertical className="w-full gap-8 h-full">
      <ListingTitle text="Settings" icon onIconClick={goPrevViewMode} />
      <UserInfo
        text="Muhammad Abdullah"
        subText="Exploring"
        image={DEFAULT_IMAGE_URL}
        allowEllipsis={false}
      />
      {/* OPTIONS */}
      <Flex vertical className="gap-5 w-full">
        {settingsTabTriggers.map((item, i) => {
          return (
            <Flex vertical className="gap-3 w-full text-gray-600">
              {item?.isModalTrigger ? (
                <ModalTrigger
                  as={Flex}
                  id={item?.modalId!}
                  align="center"
                  justify="start"
                  className="cursor-pointer w-full gap-3">
                  <IconWrapper icon={item.icon} />
                  <p>{item.text}</p>
                </ModalTrigger>
              ) : (
                <Flex
                  onClick={() =>
                    changeTab({ key: item?.tabKey!, val: item?.tabValue! })
                  }
                  align="center"
                  justify="start"
                  className="cursor-pointer w-full gap-3">
                  <IconWrapper icon={item.icon} />
                  <p>{item.text}</p>
                </Flex>
              )}

              {item.renderHR && <Separator />}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SettingsView;
