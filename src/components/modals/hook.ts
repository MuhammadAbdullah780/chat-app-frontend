import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ModalIds } from "./typings";
import { closeModal, openModal } from "@/store/slices/ui/modal.slice";
import { useKeyPress } from "@/utils/hooks/use-key-press";

type Args = {
  id: ModalIds;
};

export const useModal = ({ id }: Args) => {
  // Hooks
  const dispatch = useAppDispatch();

  // Store
  const openedModal = useAppSelector((state) => state.ui.modals.openedModal);

  // Booleans
  const isOpen = openedModal === id;

  // Functions
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  const handleModalOpen = (args?: Record<string, any>) => {
    dispatch(openModal({ id, props: args }));
  };

  useKeyPress("Escape", () => {
    handleModalClose();
  });

  return {
    handleModalOpen,
    handleModalClose,
    isOpen,
  };
};
