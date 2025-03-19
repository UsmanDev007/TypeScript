import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthInterface } from "./AuthType";

const initialState: AuthInterface = {
  user: null,
  token: localStorage.getItem("token") || null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{ firstName: string; token: string }>
    ) => {
      state.user = {firstName:action.payload.firstName}
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logOutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginUser, logOutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
