import { Spend } from "../../../types";
import { priceParser } from "../../../utils/priceParser";

export const returnTotalSpends = (spend: Spend[]) => {
  let total = 0;

  spend.map((item) => {
    total = Number(item.total) + Number(total);
  });

  const totalParsed = priceParser(total);

  return totalParsed;
};
