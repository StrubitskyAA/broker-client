import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";
import currencyRatesApi from "../services/currency-retes-api";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyRatesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
