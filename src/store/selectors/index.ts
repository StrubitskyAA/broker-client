import { RootState } from "..";

export const currencyRatesStoreSelector = (state: RootState) =>
  state.currencyRates;

export const currencyRatesSelector = (state: RootState) =>
  currencyRatesStoreSelector(state).currencyRates;

export const lastUpdateDateSelector = (state: RootState) =>
  currencyRatesStoreSelector(state).lastUpdateDateUTC;

export const currencyRateFetchingStatusSelector = (state: RootState) =>
  currencyRatesStoreSelector(state).isFetching;

export const infoMessageSelector = (state: RootState) => state.info;

export const connectionStatusSelector = (state: RootState) =>
  state.connection.hasConnection;
