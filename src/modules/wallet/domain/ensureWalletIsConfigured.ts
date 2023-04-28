export const ensureWalletIsInitialized = (
  money: number,
  totalSavings: number
) => {
  if (money === 0) return false;

  if (money === 0 && totalSavings === 0) return false;

  return true;
};
