import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./slice/register";


export const store = configureStore({
  reducer: {
    register: registerReducer, // Add the registerReducer to the store configuration\
  },
});