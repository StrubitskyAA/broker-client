import { Dispatch } from "@reduxjs/toolkit";

import {
  setConnectionStatusAction,
  setCurrencyRatesAction,
  setCurrencyRatesFetchingStatusAction,
  setInfoMessageAction,
} from "../store/actions/redux-actions";

import { currencyRatesApi } from "./api";
import { alertColorsEnum } from "../constants/colors";

export const getCurrencyRatesRequest = async (
  dispatch: Dispatch,
  isActive?: boolean
) => {
  try {
    if (isActive) dispatch(setCurrencyRatesFetchingStatusAction(true));
    const result = await currencyRatesApi.getCurrencyRates();
    dispatch(setConnectionStatusAction(true));
    dispatch(setCurrencyRatesAction(result.rates, result.date));
  } catch (e) {
    console.log("e = ", e);
    isActive &&
      dispatch(
        setInfoMessageAction({
          infoText: "Occurred while attempting to load data",
          infoType: alertColorsEnum.error,
        })
      );
    dispatch(setConnectionStatusAction(false));
  } finally {
    dispatch(setCurrencyRatesFetchingStatusAction(false));
  }
};
