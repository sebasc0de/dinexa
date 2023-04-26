export const monthlySavingCalculator = (
  savingPercentage: number,
  monthlyIncome: number
) => {
  const percentage = savingPercentage / 100;
  const monthlySavings = monthlyIncome * percentage;

  return monthlySavings.toFixed(2);
};

export const yearSavingCalculator = (
  savingPercentage: number,
  monthlyIncome: number
) => {
  const percentage = savingPercentage / 100;
  const monthlySavings = monthlyIncome * percentage;
  const yearSavings = monthlySavings * 12;

  return yearSavings.toFixed(2);
};
