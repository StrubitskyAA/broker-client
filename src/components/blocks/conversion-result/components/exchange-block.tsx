import { FC, memo } from "react";

import { useAppSelector } from "../../../../hooks/redux-hooks";

import { ICurrencyRates } from "../../../../ts-types";

import { exchangedRate } from "../helpers";

import ExchangeLine from "./exchange-line";

export interface ICurrencyRatesProps {
  currencyRates: ICurrencyRates | undefined;
}

const ExchangeBlock: FC<ICurrencyRatesProps> = memo(function Inner({
  currencyRates,
}) {
  const { fromCurrencyCode, toCurrencyCode } = useAppSelector(
    (store) => store.currency,
  );

  return (
    <>
      <ExchangeLine
        label="Exchange Rate"
        value={
          currencyRates
            ? `1 ${fromCurrencyCode} = ${exchangedRate({
                currencyRates,
                fromCode: fromCurrencyCode,
                toCode: toCurrencyCode,
              })} ${toCurrencyCode}`
            : ""
        }
      />
      <ExchangeLine
        label="Inverse Rate"
        value={
          currencyRates
            ? `1 ${toCurrencyCode} = ${exchangedRate({
                currencyRates,
                fromCode: toCurrencyCode,
                toCode: fromCurrencyCode,
              })} ${fromCurrencyCode}`
            : ""
        }
      />
    </>
  );
});

export default ExchangeBlock;
