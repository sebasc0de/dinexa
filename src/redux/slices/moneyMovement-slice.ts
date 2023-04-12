import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyMovement } from "../../types";

interface MoneyMovementState {
  data: MoneyMovement[];
}

const initialState: MoneyMovementState = {
  data: [],
};

export const moneyMovementSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMoneyMovement(state, action: PayloadAction<MoneyMovement>) {
      state.data.push(action.payload);
    },
  },
});

export const { setMoneyMovement } = moneyMovementSlice.actions;

export default moneyMovementSlice.reducer;
