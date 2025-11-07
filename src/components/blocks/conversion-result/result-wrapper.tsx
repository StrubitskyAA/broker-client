import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

import currencyList from "../../../constants/currencies.json";

import OutPreloader from "../../elements/preloader/uot-preloader";

import {
  blockWrapperStyles,
  dividerStyles,
} from "../../../styles/elements-styles";
import {
  flexItemCentered,
  flexRowStyles,
  flexSpaceBetween,
} from "../../../styles/flex-styles";
import {
  rateAttantionStyles,
  rateLabelStyles,
  rateTextStyles,
  resultTitleStyles,
  resultStyles,
  resultConversionStyles,
} from "./styles";

const ResultWrapper: FC<{
  currencyFromIndex: number;
  currencyToIndex: number;
  amount: string;
}> = ({ currencyFromIndex, currencyToIndex, amount }) => (
  <Box sx={blockWrapperStyles}>
    <OutPreloader size={25} />
    <Typography sx={resultTitleStyles}>Conversion result</Typography>
    <Typography sx={resultStyles}>
      {currencyList[currencyFromIndex].symbolNative}0.92
    </Typography>
    <Typography sx={resultConversionStyles}>
      {amount} {currencyList[currencyFromIndex].code} =
    </Typography>
    <Divider sx={dividerStyles} />
    <Box sx={{ ...flexRowStyles, ...flexItemCentered, ...flexSpaceBetween }}>
      <Typography sx={rateLabelStyles}>Exchange Rate</Typography>
      <Typography sx={rateTextStyles}>
        1 {currencyList[currencyFromIndex].code} = 0.920000{" "}
        {currencyList[currencyToIndex].code}
      </Typography>
    </Box>
    <Box sx={{ ...flexRowStyles, ...flexItemCentered, ...flexSpaceBetween }}>
      <Typography sx={rateLabelStyles}>Inverse Rate</Typography>
      <Typography sx={rateTextStyles}>
        1 {currencyList[currencyToIndex].code} = 1.086957{" "}
        {currencyList[currencyFromIndex].code}
      </Typography>
    </Box>
    <Divider sx={dividerStyles} />
    <Typography sx={rateAttantionStyles}>
      Rates are for informational purposes only and may not reflect real-time
      market rates
    </Typography>
  </Box>
);

export default ResultWrapper;
