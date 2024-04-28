import Flex from "@/components/common/Flex";
import IconWrapper from "@/components/common/IconWrapper";
import UserInfo from "@/components/common/UserInfo";
import ModalTrigger from "@/components/modals/components/ModalTrigger";
import { Separator } from "@/components/ui/Seperator";
import ListingTitle from "@/containers/Chat/Title";
import { useAppDispatch } from "@/store/hooks";
import { setTab } from "@/store/slices/ui/global-tabs.slice";
import { DEFAULT_IMAGE_URL } from "@/utils/constants";
import { goPrevViewMode } from "../../function";
import { settingsTabTriggers } from "./config";

type Props = {};

const SettingsView = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Flex vertical className="w-full gap-8 h-full">
      <ListingTitle text="Settings" />
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
                    dispatch(
                      setTab({ key: item?.tabKey!, val: item?.tabValue! }),
                    )
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
