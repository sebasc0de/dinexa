import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";
import store from "../../../store";

// Redux store - Wallet
const wallet = store.getState().wallet;

export const addMoneyToWallet = async (total: number) => {
  // Update total savings
  updateSavings(total);

  store.dispatch(updateWalletMoney(wallet.money + total));
};

export const substractMoneyOfWallet = async (total: number) => {
  store.dispatch(updateWalletMoney(wallet.money - total));
};

export const updateSavings = async (transactionAmount: number) => {
  const savingPercentage = wallet.settings.savingPercentage;

  const result = (transactionAmount * savingPercentage) / 100;

  store.dispatch(updateWalletSavings(result));
};
