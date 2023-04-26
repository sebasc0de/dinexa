import { Wallet } from "../../../types";

export const ensureWalletIsConfigured = (wallet: Wallet) => {
  if (wallet.savingPercentage === 0) return false;

  if (wallet.secureMonthlyIncome <= 0) return false;

  return true;
};
