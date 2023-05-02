import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";
import { WalletOperation } from "../../../types";
import store from "../../../store";

// Redux store - Wallet
const wallet = store.getState().wallet;

export const updateWallet = async ({ total, type }: WalletOperation) => {
  if (type === "extract")
    store.dispatch(updateWalletMoney(wallet.money - total));

  // Update total savings
  updateSavings(total);

  store.dispatch(updateWalletMoney(wallet.money + total));
};

export const updateSavings = async (transactionAmount: number) => {
  const savingPercentage = wallet.settings.savingPercentage;

  const result = (transactionAmount * savingPercentage) / 100;

  store.dispatch(updateWalletSavings(result));
};
