import _ from "lodash";

import { currencyRatesType } from "../../../../ts-types";

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
