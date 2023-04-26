import { combineReducers } from "@reduxjs/toolkit";
import moneyReducer from "../redux/slices/moneyMovement-slice";
import authReducer from "../redux/slices/auth-slice";
import walletReducer from "../redux/slices/wallet-slice";

export const rootReducer = combineReducers({
  moneyMovements: moneyReducer,
  auth: authReducer,
  wallet: walletReducer,
});
