import { useEffect } from "react";

export const useRenderEffect = (fn: () => Promise<void> | void) => {
  useEffect(() => {
    fn?.();
  }, []);
};
