import { Button } from "@/components/ui/Button";
import React, { ComponentPropsWithoutRef } from "react";
import { ModalIds } from "../../typings";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/slices/ui/modal.slice";

type Props<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
  id: ModalIds;
  modalArgs?: Record<string, any>;
};

const ModalTrigger = <T extends React.ElementType>({
  as,
  children,
  id,
  modalArgs = {},
  ...props
}: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>) => {
  const Component = as || Button;
  const dispatch = useAppDispatch();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(openModal({ id, props: modalArgs }));
  };

  return (
    <Component {...props} onClick={(e) => handleOpen(e)}>
      {children}
    </Component>
  );
};

export default ModalTrigger;
