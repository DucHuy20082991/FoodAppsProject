import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./slice/register";
import loginReducer from "./slice/login";


export const store = configureStore({
  reducer: {
    register: registerReducer, // Add the registerReducer to the store configuration\
    login: loginReducer
  },
});