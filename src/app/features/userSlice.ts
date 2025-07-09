import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  budgets: [],
  transactions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logut: (state) => {
      state.user = null;
    },
    isAuthReady: (state) => {
      state.isAuth = true;
    },
    setBudgets: (state, { payload }) => {
      state.budgets = payload;
    },
  },
});

export const { isAuthReady, login, logut, setBudgets } = userSlice.actions;
export default userSlice.reducer;
