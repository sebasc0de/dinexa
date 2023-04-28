import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Spend } from "../../types";

interface SpendState {
  data: Spend[];
}

const initialState: SpendState = {
  data: [],
};

export const spendSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createSpend(state, action: PayloadAction<Spend>) {
      state.data.push(action.payload);
    },
  },
});

export const { createSpend } = spendSlice.actions;

export default spendSlice.reducer;
