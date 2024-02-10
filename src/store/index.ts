import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Logic for combining the reducers
const combinedReducer = combineReducers({});

const rootReducer = (state: any, action: any) => {
  //   if (action.type === "app/logout/fulfilled") {
  //     state = {};
  //   }
  return combinedReducer(state, action as never);
};

// Store Configurations
const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
