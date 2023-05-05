// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setWalletMoney } from "../slices/wallet-slice";

// Wallet
import { updateWallet as Service } from "../../modules/wallet/application/Service";
import SupabaseRepository from "../../modules/wallet/infraestructure/SupabaseRepository";

// Supabase repository
const repository = SupabaseRepository();

export const updateMoneyInWallet = createAsyncThunk(
  "wallet/update",
  async (money: number, { dispatch, getState }) => {
    const update = await Service(repository, money);

    dispatch(setWalletMoney(money));
  }
);
