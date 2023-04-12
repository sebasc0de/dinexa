import { combineReducers } from "@reduxjs/toolkit";
import moneyReducer from "../redux/slices/moneyMovement-slice";

export const rootReducer = combineReducers({
  moneyMovements: moneyReducer,
});
