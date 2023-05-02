import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wallet, WalletData, WalletSettings } from "../../types";

const initialState: Wallet = {
  money: 0,
  totalSavings: 0,
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

    setWalletData(state, action: PayloadAction<WalletData>) {
      state.money = Number(action.payload.money);
      state.totalSavings = Number(action.payload.totalSavings);
    },

    updateWalletMoney(state, action: PayloadAction<number>) {
      state.money = action.payload;
    },

    updateWalletSavings(state, action: PayloadAction<number>) {
      const newSavings = state.totalSavings + action.payload;
      state.totalSavings = newSavings;
    },
  },
});

export const {
  setSettings,
  setWalletData,
  updateWalletMoney,
  updateWalletSavings,
} = walletSlice.actions;

export default walletSlice.reducer;
