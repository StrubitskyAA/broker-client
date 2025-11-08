import _ from "lodash";

import {
  currencyRatesType,
  dateStorageType,
  preferencesStorageType,
} from "../../../../ts-types";

type exchangeRateFunctionPropTypes = {
  currencyRates: currencyRatesType;
  fromCode: string;
  toCode: string;
};

const getExchangeRate = ({
  currencyRates,
  fromCode,
  toCode,
}: exchangeRateFunctionPropTypes) =>
  currencyRates[toCode] / currencyRates[fromCode];

export const exchangedRate = (props: exchangeRateFunctionPropTypes) =>
  getExchangeRate(props).toFixed(6);

export const getConversionResult = ({
  currencyRates,
  fromCode,
  toCode,
  amount,
}: { amount: string } & exchangeRateFunctionPropTypes) =>
  Math.round(
    getExchangeRate({ currencyRates, fromCode, toCode }) *
      _.toNumber(amount) *
      100
  ) / 100;

export const setToStorage = (
  key: string,
  value: string | dateStorageType | preferencesStorageType
) => {
  let data = _.toString(value);
  try {
    data = JSON.stringify(value);
  } catch (e) {}
  localStorage.setItem(key, data);
};

export const getFromStorage = (key: string) => {
  let data: string | dateStorageType | preferencesStorageType | null =
    localStorage.getItem(key);
  try {
    data = JSON.parse(data as string);
  } catch (e) {}

  return data;
};
