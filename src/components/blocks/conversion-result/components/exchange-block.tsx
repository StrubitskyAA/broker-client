import { FC, memo } from "react";

import { currencyRatesType } from "../../../../ts-types";

import { checkIsEqualExchangeProps } from "../helpers/memoization";
import { exchangedRate } from "../helpers";

import ExchangeLine from "./exchange-line";

export type exchangeBlockPropsType = {
  currencyFromCode: string;
  currencyToCode: string;
  currencyRates: currencyRatesType;
};

const ExchangeBlock: FC<exchangeBlockPropsType> = memo(function Inner({
  currencyFromCode,
  currencyToCode,
  currencyRates,
}) {
  return (
    <>
      <ExchangeLine
        label="Exchange Rate"
        value={`1 ${currencyFromCode} = ${exchangedRate({
          currencyRates,
          fromCode: currencyFromCode,
          toCode: currencyToCode,
        })} ${currencyToCode}`}
      />
      <ExchangeLine
        label="Inverse Rate"
        value={`1 ${currencyToCode} = ${exchangedRate({
          currencyRates,
          fromCode: currencyToCode,
          toCode: currencyFromCode,
        })} ${currencyFromCode}`}
      />
    </>
  );
},
checkIsEqualExchangeProps);

export default ExchangeBlock;
