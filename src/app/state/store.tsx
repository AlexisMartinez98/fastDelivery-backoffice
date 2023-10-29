import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import dateReducer from "./dateSlice"; 

const store = configureStore({
  reducer: {
    user: userReducer,
    date: dateReducer
  },
});

export default store;

export interface RootState {
  user: UserType;
  date: DateType
}

export interface UserType {
  name: string;
  email: string;
}

export interface DateType {

  selectedDate: Date ;
}