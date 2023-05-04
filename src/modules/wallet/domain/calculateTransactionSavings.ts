export const calculateTransactionSavings = (
  amount: number,
  savingPercentage: number
) => {
  const result = (amount * savingPercentage) / 100;

  return result;
};
