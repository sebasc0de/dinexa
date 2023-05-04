import { Wallet } from "../../../types";

export const addMoneyToWallet = (total: number, wallet: Wallet) => {
  const moneyInWallet = wallet.money;

  const walletWithEarningTotal = moneyInWallet + total;

  if (wallet.totalSavings) return walletWithEarningTotal - wallet.totalSavings;

  if (!wallet.totalSavings) return moneyInWallet + total;
};
