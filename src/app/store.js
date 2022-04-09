import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
//import { setupListeners } from "@reduxjs/toolkit/query";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
//setupListeners(store.dispatch);
