import { Dispatch } from "@reduxjs/toolkit";
import moment from "moment";
import _ from "lodash";

import { fetchCurrencyRatesAction } from "../store/actions/redux-actions";

import {
  currencyInfoType,
  currencyListType,
  currencyRatesType,
} from "../ts-types";

import { updateRatesInterval } from "../constants/time";
import currencyList from "../constants/currencies.json";

export const convertDateFormat = (DateUtc: string, format: string) =>
  moment(DateUtc).format(format);

export const updateData = (dispatch: Dispatch) => {
  setTimeout(async () => {
    dispatch(fetchCurrencyRatesAction());
    updateData(dispatch);
  }, updateRatesInterval);
};

export const groupListByCode = (list: currencyInfoType[]): currencyListType =>
  _.keyBy(list, (currencyInfo) => currencyInfo.code);

export const contertCurrencyList = (currencyRates?: currencyRatesType) =>
  currencyRates
    ? groupListByCode(
        currencyList.filter(
          (currencyInfo) => !!currencyRates[currencyInfo.code]
        )
      )
    : groupListByCode(currencyList);
