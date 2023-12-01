import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./slice/register";
import loginReducer from "./slice/login";
import forgotpasswordReducer from './slice/forgotpassword'

export const store = configureStore({
  reducer: {
    register: registerReducer, // Add the registerReducer to the store configuration\
    login: loginReducer,
    forgotpassword: forgotpasswordReducer
  },
});