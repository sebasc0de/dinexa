export const addMoneyToWallet = (total: number, money: number): number => {
  const moneyInWallet = Number(money);
  const earningTotal = Number(total);

  return moneyInWallet + earningTotal;
};
