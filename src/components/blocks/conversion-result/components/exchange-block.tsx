import { FC, memo } from "react";

import { currencyRatesType } from "../../../../ts-types";

import currencyList from "../../../../constants/currencies.json";

import { checkIsEqualExchangeProps } from "../helpers/memoization";
import { exchangedRate } from "../helpers";

import ExchangeLine from "./exchange-line";

export type exchangeBlockPropsType = {
  currencyFromIndex: number;
  currencyToIndex: number;
  currencyRates: currencyRatesType;
};

const ExchangeBlock: FC<exchangeBlockPropsType> = memo(function Inner({
  currencyFromIndex,
  currencyToIndex,
  currencyRates,
}) {
  return (
    <>
      <ExchangeLine
        label="Exchange Rate"
        value={`1 ${currencyList[currencyFromIndex].code} = ${exchangedRate({
          currencyRates,
          fromCode: currencyList[currencyFromIndex].code,
          toCode: currencyList[currencyToIndex].code,
        })} ${currencyList[currencyToIndex].code}`}
      />
      <ExchangeLine
        label="Inverse Rate"
        value={`1 ${currencyList[currencyToIndex].code} = ${exchangedRate({
          currencyRates,
          fromCode: currencyList[currencyToIndex].code,
          toCode: currencyList[currencyFromIndex].code,
        })} ${currencyList[currencyFromIndex].code}`}
      />
    </>
  );
},
checkIsEqualExchangeProps);

export default ExchangeBlock;
