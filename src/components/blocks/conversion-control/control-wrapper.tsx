import { Box, Grid } from "@mui/material";
import { FC } from "react";

import { useAppSelector } from "../../../store/hooks/redux-hooks";
import { currencyRateFetchingStatusSelector } from "../../../store/selectors";

import { amountInputType, currensyControlType } from "../../../ts-types";

import AmountInput from "./components/amount-input";
import CurrencySelectionBlock from "./components/currency-selection-block";
import OutPreloader from "../../elements/preloader/uot-preloader";

import { blockWrapperStyles } from "../../../styles/elements-styles";

const ControlWrapper: FC<currensyControlType & amountInputType> = ({
  onAmountChange,
  amount,
  ...props
}) => {
  const isFetching: boolean = useAppSelector(
    currencyRateFetchingStatusSelector
  );

  return (
    <Box sx={blockWrapperStyles}>
      {isFetching && <OutPreloader size={25} />}
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <AmountInput onAmountChange={onAmountChange} amount={amount} />
        <CurrencySelectionBlock {...props} />
      </Grid>
    </Box>
  );
};

export default ControlWrapper;
