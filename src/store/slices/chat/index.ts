import { combineReducers } from "@reduxjs/toolkit";
import chatConversationReducer from "./conversation.slice";
import chatListingReducer from "./listing.slice";

const chatReducer = combineReducers({
  conversations: chatConversationReducer,
  listing: chatListingReducer,
});

export default chatReducer;
