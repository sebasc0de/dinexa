import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Earning } from "../../types";

interface SpendState {
  data: Earning[];
}

const initialState: SpendState = {
  data: [],
};

export const earningSlice = createSlice({
  name: "earning",
  initialState,
  reducers: {
    setEarning(state, action: PayloadAction<Earning>) {
      state.data.push(action.payload);
    },

    loadEarnings(state, action: PayloadAction<Earning[]>) {
      console.log("my earnings from redux", action.payload);
      state.data = action.payload;
    },
  },
});

export const { setEarning, loadEarnings } = earningSlice.actions;

export default earningSlice.reducer;
