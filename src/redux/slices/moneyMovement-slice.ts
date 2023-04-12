import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyMovement } from "../../types";

// Define a type for the slice state
interface MoneyMovementState {
  data: MoneyMovement[];
}

// Define the initial state using that type
const initialState: MoneyMovementState = {
  data: [],
};

export const moneyMovementSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMoneyMovement(state, action: PayloadAction<MoneyMovement[]>) {
      state.data.push(...action.payload);
    },
  },
});

export const { setMoneyMovement } = moneyMovementSlice.actions;

export default moneyMovementSlice.reducer;
