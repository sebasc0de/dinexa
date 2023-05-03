import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";
import store from "../../../store";

// Add money to wallet
export const addMoneyToWallet = (total: number) => {
  const moneyInWallet = store.getState().wallet.money;
  const savings = updateSavings(total);

  const wallet = moneyInWallet + total;

  store.dispatch(updateWalletMoney(wallet - savings));
};

// Update totalSavings
export const updateSavings = (transactionAmount: number) => {
  const savingPercentage = store.getState().wallet.settings.savingPercentage;

  const result = (transactionAmount * savingPercentage) / 100;

  store.dispatch(updateWalletSavings(result));

  return result;
};

// Substract money of wallet per operation
export const substractMoneyOfWallet = async (total: number) => {
  const money = store.getState().wallet.money;
  const substract = money - total;

  store.dispatch(updateWalletMoney(substract));
};
