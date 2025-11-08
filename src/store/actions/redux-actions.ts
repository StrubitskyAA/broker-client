import { currencyRatesType, infoInterface } from "../../ts-types";

import {
  currencyRatesActionTypesEnum,
  infoActionTypesEnum,
} from "../constants/redux-constants";

export const fetchCurrencyRatesAction = (isActive?: boolean) => ({
  type: currencyRatesActionTypesEnum.fetchCurrencyRates,
  payload: isActive,
});

export const setCurrencyRatesAction = (
  currencyRates: currencyRatesType,
  date: string
) => ({
  type: currencyRatesActionTypesEnum.setCurrencyRates,
  payload: { currencyRates, date },
});

export const setCurrencyRatesFetchingStatusAction = (status: boolean) => ({
  type: currencyRatesActionTypesEnum.setCurrencyRatesFetchingStatus,
  payload: status,
});

export const setInfoMessageAction = (message: infoInterface) => ({
  type: infoActionTypesEnum.setInfoMessage,
  payload: message,
});

export const clearInfoMessageAction = () => ({
  type: infoActionTypesEnum.clearInfoMessage,
});
