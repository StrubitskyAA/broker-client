import { Typography } from "@mui/material";
import { FC, memo, useContext } from "react";
import _ from "lodash";

import { useAppSelector } from "../../../../hooks/redux-hooks";

import { ICurrencyRatesProps } from "./exchange-block";

import { getConversionResult } from "../helpers";

import { CurrencyListContext } from "../../conversion-wrapper/wrapper";

import { resultConversionStyles, resultStyles } from "../styles";

const ResultValueBlock: FC<ICurrencyRatesProps> = memo(function Inner({
  currencyRates,
}) {
  const currencyList = useContext(CurrencyListContext);
  const { fromCurrencyCode, toCurrencyCode, amount } = useAppSelector(
    (store) => store.currency,
  );

  return currencyRates ? (
    <>
      <Typography sx={resultStyles}>
        {currencyList[toCurrencyCode].symbolNative}
        {getConversionResult({
          currencyRates,
          fromCode: fromCurrencyCode,
          toCode: toCurrencyCode,
          amount,
        })}
      </Typography>
      <Typography sx={resultConversionStyles}>
        {_.toNumber(amount) || 0} {fromCurrencyCode} =
      </Typography>
    </>
  ) : null;
});

export default ResultValueBlock;
