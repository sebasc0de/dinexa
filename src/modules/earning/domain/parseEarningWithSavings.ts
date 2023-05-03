import { Earning } from "../../../types";

export const parseEarningWithSavings = (
  savings: number,
  earning: Earning
): Earning => {
  if (savings >= 5) {
    const { total, ...rest } = earning;

    return { total: total - savings, ...rest };
  }

  return earning;
};
