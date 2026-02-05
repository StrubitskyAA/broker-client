import { Grid, Typography } from "@mui/material";
import { FC, useCallback } from "react";

import { setAmount } from "../../../../store/reducers/currency-reducer";

import NumberInput from "../../../elements/inputs/number-input";

import { inputLabelStyles } from "../../../../styles/text-styles";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { currencySelector } from "../../../../store/selectors";

const AmountInput: FC = () => {
  const { amount } = useAppSelector(currencySelector);
  const dispatch = useAppDispatch();
  const changeAmountHandler = useCallback(
    (value: string) => dispatch(setAmount(value)),
    [dispatch, setAmount],
  );

  return (
    <Grid size={12} sx={{ mb: 2 }}>
      <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
        Amount
      </Typography>
      <NumberInput value={amount} setValue={changeAmountHandler} />
    </Grid>
  );
};

export default AmountInput;
