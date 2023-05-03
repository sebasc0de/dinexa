// Redux
import store from "../../../store";
import { createEarning } from "../../../redux/thunks/earning";
import {
  addMoneyToWallet,
  updateSavings,
} from "../../wallet/application/ReduxService";

// Types
import { Earning } from "../../../types";
import { parseEarningWithSavings } from "../domain/parseEarningWithSavings";

export const create = async (earning: Earning) => {
  // Update total savings
  const savings = updateSavings(earning.total);

  // Parse earning with savings
  const earningWithSavings = parseEarningWithSavings(savings, earning);

  // Add money to wallet
  addMoneyToWallet(earning.total, savings);

  store.dispatch(createEarning(earningWithSavings));
};
