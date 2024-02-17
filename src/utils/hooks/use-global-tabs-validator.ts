import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeInitialCheck } from "@/store/slices/ui/global-tabs.slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGlobalTabFunctions } from "./use-global-tab-functions";
import { useUpdateEffect } from "./use-update-effect";

export type GlobalTabValidatorArgs = {
  params?: { tabKey: string; possibilities?: string[]; fallback?: string }[];
};

export const useGlobalTabValidation = ({ params }: GlobalTabValidatorArgs) => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { openTab, closeTab } = useGlobalTabFunctions();

  const tabs = useAppSelector((state) => state.ui.globalTabs.activeTabs);
  const check = useAppSelector((state) => state.ui.globalTabs.initialCheck);

  useEffect(() => {
    if (!router.isReady) {
      setMounted(true);
      return;
    }

    params?.forEach(async (elem) => {
      const { tabKey, fallback, possibilities } = elem;

      if (!router.query?.[tabKey]) {
        dispatch(changeInitialCheck({ value: true }));
        setMounted(true);
        return;
      }

      if (possibilities?.includes(router?.query?.[tabKey] as string)) {
        //
        openTab({ key: tabKey, val: router?.query?.[tabKey] as any });
        setMounted(true);
        return;
      } else {
        //
        console.log("RUNS__ELSE", { fallback });
        openTab({
          key: tabKey,
          val: fallback ? fallback : (router.query?.[tabKey] as any),
        });
        setMounted(true);
        return;
      }
    });
  }, [router.isReady]);

  useEffect(() => {
    //
    if (!check) return;

    params?.forEach((item) => {
      const { tabKey } = item;

      //
      if (router?.query?.[tabKey] && !tabs?.[tabKey]) {
        const val = router?.query?.[tabKey]! as any;
        openTab({ key: tabKey, val });
        return;
      }

      //
      if (!router?.query?.[tabKey] && tabs?.[tabKey]) {
        closeTab({ key: tabKey });
        return;
      }
    });
  }, [router.query]);

  return;
};
