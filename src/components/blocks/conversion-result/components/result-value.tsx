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
  currencyFromCode,
  currencyToCode,
  amount,
  currencyRates,
}) {
  const currencyList = useContext(CurrencyListContext);

  return (
    <>
      <Typography sx={resultStyles}>
        {currencyList[currencyToCode].symbolNative}
        {getConversionResult({
          currencyRates,
          fromCode: currencyFromCode,
          toCode: currencyToCode,
          amount,
        })}
      </Typography>
      <Typography sx={resultConversionStyles}>
        {_.toNumber(amount) || 0} {currencyFromCode} =
      </Typography>
    </>
  );
},
checkIsEqualResultValuesProps);

export default ResultValueBlock;
