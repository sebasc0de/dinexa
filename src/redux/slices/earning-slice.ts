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
  },
});

export const { setEarning } = earningSlice.actions;

export default earningSlice.reducer;
