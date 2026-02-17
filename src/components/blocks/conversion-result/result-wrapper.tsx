import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import _ from "lodash";

import { useGetRatesQuery } from "../../../services/currency-retes-api";

import OutPreloader from "../../elements/preloader/uot-preloader";
import ResultValueBlock from "./components/result-value";
import InfoMessage from "../../elements/info/info-message";
import ExchangeBlock from "./components/exchange-block";

import {
  blockWrapperStyles,
  dividerStyles,
} from "../../../styles/elements-styles";
import { rateAttantionStyles, resultTitleStyles } from "./styles";
import { infoTextStyles } from "../../../styles/text-styles";

const ResultWrapper: FC = () => {
  const { data, isLoading } = useGetRatesQuery();

  return (
    <Box sx={blockWrapperStyles}>
      {isLoading && <OutPreloader size={25} />}
      <Typography sx={resultTitleStyles}>Conversion result</Typography>
      {!_.isEmpty(data) ? (
        <>
          <ResultValueBlock currencyRates={data} />
          <Divider sx={dividerStyles} />
          <ExchangeBlock currencyRates={data} />
        </>
      ) : (
        <InfoMessage
          label="Currency rates are not loaded"
          sx={{ ...infoTextStyles, padding: "45px 0" }}
        />
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
