import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TabSlice = {
  initialCheck?: boolean;
  activeTabs: Record<string, string>;
  // later On Manage History Features
};
type CloseTabArgs = PayloadAction<{
  key: string;
}>;
type OpenTabArgs = PayloadAction<{
  key: string;
  val: string;
}>;
type ChangeTabArgs = PayloadAction<{ key: string; val: string }>;
type ChangeInitialCheckArgs = PayloadAction<{
  value: boolean;
}>;

const initialState: TabSlice = {
  initialCheck: false,
  activeTabs: {},
};

const globalTabSlice = createSlice({
  name: "global_tabs",
  initialState,
  reducers: {
    closeTab: (state, { payload }: CloseTabArgs) => {
      const tabs = state.activeTabs;
      if (!state.activeTabs?.[payload.key]) {
        //
        return;
      } else {
        //
        delete tabs?.[payload.key];
      }

      state.activeTabs = tabs;
    },
    openTab: (state, { payload }: OpenTabArgs) => {
      if (state.activeTabs?.[payload.key]) {
        //
        return;
      } else {
        //
        state.activeTabs = { ...state.activeTabs, [payload.key]: payload.val };
      }

      state.initialCheck = true;
    },
    changeTab: (state, { payload }: ChangeTabArgs) => {
      if (!state.activeTabs?.[payload.key]) {
        //
        return;
      } else {
        //
        state.activeTabs = { ...state.activeTabs, [payload.key]: payload.val };
      }
    },
    changeInitialCheck: (state, { payload }: ChangeInitialCheckArgs) => {
      state.initialCheck = payload.value;
    },
  },
});

export const { closeTab, openTab, changeTab, changeInitialCheck } =
  globalTabSlice.actions;
export default globalTabSlice.reducer;
