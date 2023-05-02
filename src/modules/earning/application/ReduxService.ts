import { createEarning } from "../../../redux/slices/earning-slice";
import { Earning } from "../../../types";
import { addMoneyToWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

export const create = async (earning: Earning) => {
  addMoneyToWallet(Number(earning.total));

  store.dispatch(createEarning(earning));
};
