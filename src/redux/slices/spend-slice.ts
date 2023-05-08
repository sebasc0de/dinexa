import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Spend } from "../../types";

interface SpendState {
  data: Spend[];
}

const initialState: SpendState = {
  data: [],
};

export const spendSlice = createSlice({
  name: "spend",
  initialState,
  reducers: {
    setSpend(state, action: PayloadAction<Spend>) {
      state.data.push(action.payload);
    },

    loadSpends(state, action: PayloadAction<Spend[]>) {
      console.log("my spends from redux", action.payload);
      state.data = action.payload;
    },
  },
});

export const { setSpend, loadSpends } = spendSlice.actions;

export default spendSlice.reducer;
