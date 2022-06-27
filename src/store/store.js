import { configureStore } from "@reduxjs/toolkit";
import climaReducer from "./slices/climaSlice";

export const store = configureStore({
  reducer: {
    clima: climaReducer,
  },
});
