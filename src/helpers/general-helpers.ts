import { Dispatch } from "@reduxjs/toolkit";
import moment from "moment";

import { fetchCurrencyRatesAction } from "../store/actions/redux-actions";

import { updateRatesIntervalOnline } from "../constants/time";

export const convertDateFormat = (DateUtc: string, format: string) =>
  moment(DateUtc).format(format);

export const updateData = (dispatch: Dispatch) => {
  setTimeout(async () => {
    dispatch(fetchCurrencyRatesAction());
    updateData(dispatch);
  }, updateRatesIntervalOnline);
};
