import { useAppDispatch } from "@/store/hooks";
import { ModalIds } from "./typings";
import { openModal } from "@/store/slices/ui/modal.slice";

export const openGlobalModal = (args: {
  id: ModalIds;
  props: Record<string, any>;
}) => {
  const dispatch = useAppDispatch();

  dispatch(openModal(args));
};
