// Redux
import store from "../../../store";
import { createEarning } from "../../../redux/thunks/earning";
import {
  addMoneyToWallet,
  updateSavings,
} from "../../wallet/application/Service";

// Types
import { Earning } from "../../../types";
import { parseEarningWithSavings } from "../domain/parseEarningWithSavings";
import { Repository } from "../application/Repository";

const ReduxRepository = (): Repository => {
  return { create, getAll };
};

const create = async (earning: Earning) => {
  // Update total savings
  // const savings = updateSavings(earning.total);

  // Parse earning with savings
  // const earningWithSavings = parseEarningWithSavings(savings, earning);

  // Parse earning total to number
  // const total = Number(earning.total);

  // Add money to wallet
  // addMoneyToWallet(total, savings);

  store.dispatch(createEarning(earning));

  return true;
};

const getAll = async () => {
  const earnings = store.getState().earnings as unknown;
  return earnings as Earning[];
};

export default ReduxRepository;
