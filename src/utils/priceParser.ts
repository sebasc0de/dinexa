export const priceParser = (money: number) => {
  const options = { style: "currency", currency: "USD" };
  const parsedMoney = money.toLocaleString("en-US", options);

  return parsedMoney;
};
