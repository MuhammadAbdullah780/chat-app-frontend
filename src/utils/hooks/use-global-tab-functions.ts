import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setTab as openGlobalTab,
  closeTab as closeGlobalTab,
  resetTab as changeGlobalTab,
} from "@/store/slices/ui/global-tabs.slice";
import { useRouter } from "next/router";
import { useQueryRouter } from "./use-query-router";

type GlobalTabFuncArgs = {
  key: string;
  val: string;
};
export const useGlobalTabFunctions = () => {
  // Hooks
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  // const { pushParams, deleteParam, updateParam } = useQueryRouter();

  const activeTabs = useAppSelector((state) => state.ui.globalTabs.activeTabs);

  // Functions
  const openTab = async ({ key, val }: GlobalTabFuncArgs) => {
    // if (query?.[key] && activeTabs?.[key]) return;

    await dispatch(openGlobalTab({ key, val }));

    // await pushParams({ [key]: val });
    console.log("PARAMS__", { activeTabs, query });
  };
  const closeTab = async ({ key }: Pick<GlobalTabFuncArgs, "key">) => {
    // if (!(query?.[key] && !activeTabs?.[key])) return;

    await dispatch(closeGlobalTab({ key }));
    // await deleteParam(key);
  };
  const changeTab = async ({ key, val }: GlobalTabFuncArgs) => {
    // if (!(query?.[key] && activeTabs?.[key])) return;
    // await dispatch(changeGlobalTab({ key, val }));
    // await updateParam(key, val);
  };

  return {
    openTab,
    changeTab,
    closeTab,
    activeTabs,
  };
};
