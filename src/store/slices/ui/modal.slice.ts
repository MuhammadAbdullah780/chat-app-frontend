import { ModalIds } from "@/components/modals/typings";
import { Maybe } from "@/typings/types/utility.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalSlice = {
  openedModal: Maybe<ModalIds>;
  props: Maybe<Record<string, any>>;
};

const initialState: ModalSlice = {
  openedModal: null,
  props: null,
};

type OpenModalArgs = PayloadAction<{
  id: ModalIds;
  props?: Record<string, any>;
}>;

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, { payload }: OpenModalArgs) => {
      state.openedModal = payload.id;
      state.props = payload.props || null;
    },
    closeModal: (state) => {
      state.openedModal = null;
      state.props = null;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
