import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wallet, WalletSettings } from "../../types";

const initialState: Wallet = {
  settings: {
    costLivingAverage: 0,
    minMoneyAlert: 0,
    savingPercentage: 0,
    secureMonthlyIncome: 0,
  },
};

export const walletSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSettings(state, action: PayloadAction<WalletSettings>) {
      const { minMoneyAlert, secureMonthlyIncome, savingPercentage } =
        action.payload;

      state.settings.minMoneyAlert = Number(minMoneyAlert);
      state.settings.secureMonthlyIncome = Number(secureMonthlyIncome);
      state.settings.savingPercentage = Number(savingPercentage);
    },
  },
});

export const { setSettings } = walletSlice.actions;

export default walletSlice.reducer;
