import { Grid, Typography } from "@mui/material";
import { FC } from "react";

import { currencyControlType } from "../../../../ts-types";

import CurrencySelector from "./currency-selector";
import ReshuffleButton from "../../../elements/buttons/reshuffle-button";

import { inputLabelStyles } from "../../../../styles/text-styles";
import { flexItemEnd, flexJustCentered } from "../../../../styles/flex-styles";

const CurrencySelectionBlock: FC<currencyControlType> = ({
  currencyFromCode,
  setCurrencyFromCode,
  currencyToCode,
  setCurrencyToCode,
}) => (
  <>
    <Grid size={{ xs: 12, sm: 5.5 }}>
      <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
        From
      </Typography>
      <CurrencySelector
        currencyCode={currencyFromCode}
        onCurrencyCodeChange={setCurrencyFromCode}
      />
    </Grid>
    <Grid size={{ xs: 12, sm: 1 }} sx={{ ...flexJustCentered, ...flexItemEnd }}>
      <ReshuffleButton
        values={[currencyFromCode, currencyToCode]}
        setValuesArray={[setCurrencyFromCode, setCurrencyToCode]}
      />
    </Grid>
    <Grid size={{ xs: 12, sm: 5.5 }}>
      <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
        To
      </Typography>
      <CurrencySelector
        currencyCode={currencyToCode}
        onCurrencyCodeChange={setCurrencyToCode}
      />
    </Grid>
  </>
);

export default CurrencySelectionBlock;
