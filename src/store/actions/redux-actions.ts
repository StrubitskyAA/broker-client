import { currencyRatesType, infoInterface } from "../../ts-types";

import {
  connectionStatusActionTypesEnum,
  currencyRatesActionTypesEnum,
  infoActionTypesEnum,
} from "../constants/redux-constants";

export const setConnectionStatusAction = (connectionStatus: boolean) => ({
  type: connectionStatusActionTypesEnum.setConnectionStatus,
  payload: connectionStatus,
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
  type: infoActionTypesEnum.setInfoMessage,
});
