import { Earning } from "../../../types";

export const returnEarningWithOutSavings = (
  savings: number,
  earning: Earning
): Earning => {
  if (savings >= 5) {
    const { total, ...rest } = earning;

    const parsedEarning = { total: total - savings, ...rest };

    return parsedEarning;
  }

  return earning;
};
