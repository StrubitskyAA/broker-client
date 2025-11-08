import { currencyRatesType } from "../../ts-types";

export type connectionStateType = {
  connectionStatus: boolean;
};
export type currencyRatesStateType = {
  currencyRates: currencyRatesType | null;
  lastUpdateDateUTC: "";
  isFetching: boolean;
};
