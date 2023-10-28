import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export interface RootState {
  user: UserType;
}

export interface UserType {
  name: string;
  email: string;
}
