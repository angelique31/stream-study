import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers/rootReducer";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const wrapper = createWrapper(makeStore);
