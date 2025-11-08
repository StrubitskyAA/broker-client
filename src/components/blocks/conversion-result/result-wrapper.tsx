import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

import { currencyRatesStoreSelector } from "../../../store/selectors";
import { useAppSelector } from "../../../store/hooks/redux-hooks";

import { currencyRatesStateType } from "../../../store/ts-types";

import OutPreloader from "../../elements/preloader/uot-preloader";
import ResultValueBlock from "./components/result-value";
import InfoMessage from "../../elements/info/info-message";
import ExchangeBlock from "./components/exchange-block";

import {
  blockWrapperStyles,
  dividerStyles,
} from "../../../styles/elements-styles";
import { rateAttantionStyles, resultTitleStyles } from "./styles";

const ResultWrapper: FC<{
  currencyFromIndex: number;
  currencyToIndex: number;
  amount: string;
}> = ({ currencyFromIndex, currencyToIndex, amount }) => {
  const { isFetching, currencyRates }: currencyRatesStateType = useAppSelector(
    currencyRatesStoreSelector
  );

  return (
    <Box sx={blockWrapperStyles}>
      {isFetching && <OutPreloader size={25} />}
      <Typography sx={resultTitleStyles}>Conversion result</Typography>
      {currencyRates ? (
        <>
          <ResultValueBlock
            amount={amount}
            currencyFromIndex={currencyFromIndex}
            currencyToIndex={currencyToIndex}
            currencyRates={currencyRates}
          />
          <Divider sx={dividerStyles} />
          <ExchangeBlock
            currencyFromIndex={currencyFromIndex}
            currencyToIndex={currencyToIndex}
            currencyRates={currencyRates}
          />
        </>
      ) : (
        <InfoMessage label="Currency rates are not loaded" />
      )}
      <Divider sx={dividerStyles} />
      <Typography sx={rateAttantionStyles}>
        Rates are for informational purposes only and may not reflect real-time
        market rates
      </Typography>
    </Box>
  );
};

export default ResultWrapper;
