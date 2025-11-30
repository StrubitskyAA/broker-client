import _ from "lodash";

import {
  currencyRatesType,
  dateStorageType,
  preferencesStorageType,
} from "../../../../ts-types";

import { thousandSeparatorSymbol } from "../../../../constants/general-constants";

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

const getresultValue = ({
  currencyRates,
  fromCode,
  toCode,
  amount,
}: { amount: string } & exchangeRateFunctionPropTypes) =>
  Math.round(
    getExchangeRate({ currencyRates, fromCode, toCode }) *
      _.toNumber(amount.replace(",", ".").replaceAll(" ", "")) *
      100
  ) / 100;

export const getConversionResult = ({
  currencyRates,
  fromCode,
  toCode,
  amount,
}: { amount: string } & exchangeRateFunctionPropTypes) => {
  const value = _.toString(
    getresultValue({
      currencyRates,
      fromCode,
      toCode,
      amount,
    })
  );
  const valueArr = value.split(".");
  const delemitedArr = valueArr[0].split("").reverse();
  let delemitedString = "";

  for (let i = 1; i < delemitedArr.length + 1; i++) {
    delemitedString += `${delemitedArr[i - 1]}${
      i % 3 ? "" : thousandSeparatorSymbol
    }`;
  }

  return `${delemitedString.split("").reverse().join("")}${
    valueArr[1] ? `.${valueArr[1]}` : ""
  }`;
};

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
