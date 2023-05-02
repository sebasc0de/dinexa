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
    createEarning(state, action: PayloadAction<Earning>) {
      state.data.push(action.payload);
    },
  },
});

export const { createEarning } = earningSlice.actions;

export default earningSlice.reducer;
