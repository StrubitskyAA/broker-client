import { Box, Grid } from "@mui/material";
import { FC } from "react";

import { amountInputType, currensyControlType } from "../../../type-script";

import AmountInput from "./components/amount-input";
import CurrencySelectionBlock from "./components/currency-selection-block";

import { blockWrapperStyles } from "../../../styles/elements-styles";

const ControlWrapper: FC<currensyControlType & amountInputType> = ({
  onAmountChange,
  amount,
  ...props
}) => (
  <Box sx={blockWrapperStyles}>
    <Grid container spacing={2} sx={{ width: "100%" }}>
      <AmountInput onAmountChange={onAmountChange} amount={amount} />
      <CurrencySelectionBlock {...props} />
    </Grid>
  </Box>
);

export default ControlWrapper;
