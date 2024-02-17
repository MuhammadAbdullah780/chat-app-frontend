import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsReady = (fn?: () => Promise<void> | void) => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fn?.();
    setLoading(false);
  }, [router.isReady]);

  return {
    loading,
  };
};
