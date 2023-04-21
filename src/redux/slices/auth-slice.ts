import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

interface State {
  user: undefined | User;
  autenthicated: boolean;
}

const initialState: State = {
  user: undefined,
  autenthicated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserSession(state, action: PayloadAction<User>) {
      state.autenthicated = true;
      state.user = action.payload;
    },

    logOutUser(state) {
      state.user = undefined;
      state.autenthicated = false;
    },
  },
});

export const { setUserSession, logOutUser } = authSlice.actions;

export default authSlice.reducer;
