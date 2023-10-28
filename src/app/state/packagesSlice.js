// En un archivo como "paquetesSlice.js"
import { createSlice } from "@reduxjs/toolkit";

const packagesSlice = createSlice({
  name: "paquetes",
  initialState: {
    packagesData: [], // Almacena los datos de paquetes
    selectedDate: null, // Almacena la fecha seleccionada
  },
  reducers: {
    setPackagesData: (state, action) => {
      state.packagesData = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setPackagesData, setSelectedDate } = packagesSlice.actions;

export default packagesSlice.reducer;
