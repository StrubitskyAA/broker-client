import moment from "moment";
import _ from "lodash";

import {
  currencyInfoType,
  currencyListType,
  ICurrencyRates,
} from "../ts-types";

import currencyList from "../constants/currencies.json";

export const convertDateFormat = (DateUtc: string, format: string) =>
  moment(DateUtc).format(format);

export const groupListByCode = (list: currencyInfoType[]): currencyListType =>
  _.keyBy(list, (currencyInfo) => currencyInfo.code);

export const convertCurrencyList = (currencyRates?: ICurrencyRates) =>
  currencyRates
    ? groupListByCode(
        currencyList.filter(
          (currencyInfo) => !!currencyRates[currencyInfo.code],
        ),
      )
    : groupListByCode(currencyList);
