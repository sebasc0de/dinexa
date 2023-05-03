// Redux
import store from "../../../store";
import { createEarning } from "../../../redux/thunks/earning";
import { addMoneyToWallet } from "../../wallet/application/ReduxService";

// Types
import { Earning } from "../../../types";

export const create = async (earning: Earning) => {
  addMoneyToWallet(Number(earning.total));

  store.dispatch(createEarning(earning));
};
