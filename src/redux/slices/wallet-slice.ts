import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wallet, WalletForm } from "../../types";

const initialState: Wallet = {
  minMoneyAlert: 0,
  secureMonthlyIncome: 0,
  savingPercentage: 0,
};

export const walletSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSavingPercentage(state, action) {
      state.savingPercentage = Number(action.payload);
    },

    setWalletForm(state, action: PayloadAction<WalletForm>) {
      const { minMoneyAlert, secureMonthlyIncome } = action.payload;

      state.minMoneyAlert = Number(minMoneyAlert);
      state.secureMonthlyIncome = Number(secureMonthlyIncome);
    },
  },
});

export const { setSavingPercentage, setWalletForm } = walletSlice.actions;

export default walletSlice.reducer;
