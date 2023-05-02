import { createEarning } from "../../../redux/slices/earning-slice";
import { Earning } from "../../../types";
import { addMoneyToWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

export const create = (earning: Earning) => {
  addMoneyToWallet(earning.total);

  store.dispatch(createEarning(earning));
};

export const getAll = () => {
  return store.getState().earnings;
};
