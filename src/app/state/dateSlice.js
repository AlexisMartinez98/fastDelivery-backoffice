
import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
 
    selectedDate: null, 
  },
  reducers: {
   
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const {  setSelectedDate } = dateSlice.actions;

export default dateSlice.reducer;
