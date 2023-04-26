import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wallet } from "../../types";

const initialState: Wallet = {
  minMoneyAlert: 0,
  secureMonthlyIncome: 0,
  savingPercentage: 0,
};

export const walletSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setWalletForm(state, action: PayloadAction<Wallet>) {
      const { minMoneyAlert, secureMonthlyIncome, savingPercentage } =
        action.payload;

      state.minMoneyAlert = Number(minMoneyAlert);
      state.secureMonthlyIncome = Number(secureMonthlyIncome);
      state.savingPercentage = Number(savingPercentage);
    },
  },
});

export const { setWalletForm } = walletSlice.actions;

export default walletSlice.reducer;
