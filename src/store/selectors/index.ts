import currencyRatesApi from "../../services/currency-retes-api";
import connectionSlice from "../reducers/connection-reducer";
import currencySlice from "../reducers/currency-reducer";
import { RootState } from "..";

export const infoMessageSelector = (state: RootState) => state.info;

export const currencySelector = (state: RootState) =>
  state[currencySlice.reducerPath];

export const currencyRatesSelector = (state: RootState) =>
  state[currencyRatesApi.reducerPath];

export const connectionSelector = (state: RootState) =>
  state[connectionSlice.reducerPath];
