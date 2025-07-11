import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./features/userSlice";
interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  isAuth: boolean;
}

export interface RootState {
  user: UserState;
  // other reducers
}

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
