import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "../redux/slices/moneyMovement-slice";

const store = configureStore({
  reducer: {
    moneyMovements: moneyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
