import { useRouter } from "next/router";

export const goPrevViewMode = () => {
  const router = useRouter();

  const { view_mode, ...rest } = router.query;

  const viewModeArr = (view_mode as string)?.split("/");
  const baseViewMode = viewModeArr[0];

  if (!viewModeArr.length) return;

  if (viewModeArr.length > 1) {
    router.push({ query: { ...rest, view_mode: baseViewMode } }, undefined, {
      shallow: true,
    });
  } else {
    router.push({ query: { ...rest } }, undefined, { shallow: true });
  }
};
