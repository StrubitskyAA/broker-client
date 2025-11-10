import { Grid, Typography } from "@mui/material";
import { FC } from "react";

import { amountInputType } from "../../../../ts-types";

import NumberInput from "../../../elements/inputs/number-input";

import { inputLabelStyles } from "../../../../styles/text-styles";

const AmountInput: FC<amountInputType> = ({ amount, onAmountChange }) => (
  <Grid size={12} sx={{ mb: 2 }}>
    <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
      Amount
    </Typography>
    <NumberInput value={amount} setValue={onAmountChange} />
  </Grid>
);

export default AmountInput;
