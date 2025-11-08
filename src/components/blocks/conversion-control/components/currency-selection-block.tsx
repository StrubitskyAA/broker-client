import { Grid, Typography } from "@mui/material";
import { FC } from "react";

import { currensyControlType } from "../../../../ts-types";

import CurrencySelector from "./currency-selector";
import ReshuffleButton from "../../../elements/buttons/reshuffle-button";

import { inputLabelStyles } from "../../../../styles/text-styles";

const CurrencySelectionBlock: FC<currensyControlType> = ({
  currencyFromIndex,
  setCurrencyFromIndex,
  currencyToIndex,
  setCurrencyToIndex,
}) => (
  <>
    <Grid size={{ xs: 12, sm: 5 }}>
      <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
        From
      </Typography>
      <CurrencySelector
        currencyIndex={currencyFromIndex}
        onCurrencyIndexChange={setCurrencyFromIndex}
      />
    </Grid>
    <Grid size={{ xs: 12, sm: 2 }}>
      <ReshuffleButton
        values={[currencyFromIndex, currencyToIndex]}
        setValuesArray={[setCurrencyFromIndex, setCurrencyToIndex]}
      />
    </Grid>
    <Grid size={{ xs: 12, sm: 5 }}>
      <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
        To
      </Typography>
      <CurrencySelector
        currencyIndex={currencyToIndex}
        onCurrencyIndexChange={setCurrencyToIndex}
      />
    </Grid>
  </>
);

export default CurrencySelectionBlock;
