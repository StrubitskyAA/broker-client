import { Typography } from "@mui/material";
import { FC, memo, useContext } from "react";
import _ from "lodash";

import { exchangeBlockPropsType } from "./exchange-block";

import { checkIsEqualResultValuesProps } from "../helpers/memoization";
import { getConversionResult } from "../helpers";

import { CurrencyListContext } from "../../app";

import { resultConversionStyles, resultStyles } from "../styles";

export type resultValueBlockPropsType = exchangeBlockPropsType & {
  amount: string;
};

const ResultValueBlock: FC<resultValueBlockPropsType> = memo(function Inner({
  currencyFromIndex,
  currencyToIndex,
  amount,
  currencyRates,
}) {
  const currencyList = useContext(CurrencyListContext);

  return (
    <>
      <Typography sx={resultStyles}>
        {currencyList[currencyToIndex].symbolNative}
        {getConversionResult({
          currencyRates,
          fromCode: currencyList[currencyFromIndex].code,
          toCode: currencyList[currencyToIndex].code,
          amount,
        })}
      </Typography>
      <Typography sx={resultConversionStyles}>
        {_.toNumber(amount) || 0} {currencyList[currencyFromIndex].code} =
      </Typography>
    </>
  );
},
checkIsEqualResultValuesProps);

export default ResultValueBlock;
