import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";
import store from "../../../store";

// Add money to wallet
export const addMoneyToWallet = async (total: number) => {
  const money = store.getState().wallet.money;
  updateSavings(total);

  store.dispatch(updateWalletMoney(money + total));
};

// Update totalSavings
export const updateSavings = async (transactionAmount: number) => {
  const savingPercentage = store.getState().wallet.settings.savingPercentage;

  const result = (transactionAmount * savingPercentage) / 100;

  store.dispatch(updateWalletSavings(result));
};

// Substract money of wallet per operation
export const substractMoneyOfWallet = async (total: number) => {
  const money = store.getState().wallet.money;
  const substract = money - total;

  store.dispatch(updateWalletMoney(substract));
};
