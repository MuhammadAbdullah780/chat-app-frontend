import { useEffect, useRef } from "react";

export const useUpdateEffect = (fn: () => void, dependencies: any[]) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender?.current) {
      firstRender.current = false;
      return;
    }
    return fn?.();
  }, [dependencies]);
};
