import { Earning } from "../../../types";
import { priceParser } from "../../../utils/priceParser";

export const returnTotalEarnings = (spend: Earning[]) => {
  let total = 0;

  spend.map((item) => {
    total = Number(item.total) + Number(total);
  });

  const totalParsed = priceParser(total);

  return totalParsed;
};
