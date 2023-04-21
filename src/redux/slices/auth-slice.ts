import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

interface State {
  user: undefined | User;
}

const initialState: State = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserSession(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    logOutUser(state) {
      state.user = undefined;
    },
  },
});

export const { setUserSession, logOutUser } = authSlice.actions;

export default authSlice.reducer;
