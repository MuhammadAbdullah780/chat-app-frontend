import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modal.slice";
import globalTabReducer from "./global-tabs.slice";

const uiReducer = combineReducers({
  modals: modalReducer,
  globalTabs: globalTabReducer,
});

export default uiReducer;
