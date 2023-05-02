import { combineReducers } from "@reduxjs/toolkit";
import spendReducer from "../redux/slices/spend-slice";
import earningReducer from "../redux/slices/earning-slice";
import authReducer from "../redux/slices/auth-slice";
import walletReducer from "../redux/slices/wallet-slice";

export const rootReducer = combineReducers({
  spends: spendReducer,
  earnings: earningReducer,
  auth: authReducer,
  wallet: walletReducer,
});
