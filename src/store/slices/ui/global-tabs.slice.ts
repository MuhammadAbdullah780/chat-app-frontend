import { ChatListingViewMode } from "@/containers/Chat/Sidebar/typings";
import { GlobalTabKeys } from "@/typings/enums/global-tab-keys";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TabSlice = {
  activeTabs: Record<
    string,
    {
      history: string[];
      current: string;
    }
  >;
  // later On Manage History Features
};
type CloseTabArgs = PayloadAction<{
  key: string;
}>;
type OpenTabArgs = PayloadAction<{
  key: string;
  val: string;
}>;

const initialState: TabSlice = {
  activeTabs: {
    [GlobalTabKeys.VIEW_MODE]: {
      current: ChatListingViewMode.CHATS,
      history: [],
    },
  },
};

const globalTabSlice = createSlice({
  name: "global_tabs",
  initialState,
  reducers: {
    closeTab: (state, { payload }: CloseTabArgs) => {
      const tabs = state.activeTabs;
      delete tabs?.[payload.key];
      state.activeTabs = tabs;
    },
    setTab: (state, { payload }: OpenTabArgs) => {
      if (state.activeTabs[payload.key].history.includes(payload.val)) {
        return;
      }

      state.activeTabs[payload.key].current = payload?.val;
      state.activeTabs[payload.key].history.push(payload?.val);
    },
    resetTab: (state) => {
      state = initialState;
    },
    goPreviousTab: (state, { payload }: PayloadAction<{ key: string }>) => {
      state.activeTabs[payload.key].history.pop();
      const previous = state.activeTabs[payload.key].history?.at(-1);
      state.activeTabs[payload.key].current = previous!;
    },
  },
});

export const { closeTab, resetTab, setTab, goPreviousTab } =
  globalTabSlice.actions;
export default globalTabSlice.reducer;
