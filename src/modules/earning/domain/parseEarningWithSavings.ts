import { Earning } from "../../../types";

export const parseEarningWithSavings = (
  savings: number,
  earning: Earning
): Earning => {
  if (savings >= 5) {
    const { total, ...rest } = earning;

    const parsedEarning = { total: total - savings, ...rest };

    console.log(parsedEarning);

    return parsedEarning;
  }

  return earning;
};
