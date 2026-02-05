import { Grid, Typography } from "@mui/material";
import { FC, useCallback } from "react";

import CurrencySelector from "./currency-selector";
import ReshuffleButton from "../../../elements/buttons/reshuffle-button";

import { inputLabelStyles } from "../../../../styles/text-styles";
import { flexItemEnd, flexJustCentered } from "../../../../styles/flex-styles";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import {
  setFromCurrencyCode,
  setToCurrencyCode,
} from "../../../../store/reducers/currency-reducer";
import { currencySelector } from "../../../../store/selectors";

const CurrencySelectionBlock: FC = () => {
  const dispatch = useAppDispatch();
  const { fromCurrencyCode, toCurrencyCode } = useAppSelector(currencySelector);
  const changeFromCurrencyCodeHandler = useCallback(
    (code: string) => {
      dispatch(setFromCurrencyCode(code));
    },
    [dispatch, setFromCurrencyCode],
  );
  const changeToCurrencyCodeHandler = useCallback(
    (code: string) => {
      dispatch(setToCurrencyCode(code));
    },
    [dispatch, setToCurrencyCode],
  );

  return (
    <>
      <Grid size={{ xs: 12, sm: 5.5 }}>
        <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
          From
        </Typography>
        <CurrencySelector
          currencyCode={fromCurrencyCode}
          onCurrencyCodeChange={changeFromCurrencyCodeHandler}
        />
      </Grid>
      <Grid
        size={{ xs: 12, sm: 1 }}
        sx={{ ...flexJustCentered, ...flexItemEnd }}
      >
        <ReshuffleButton />
      </Grid>
      <Grid size={{ xs: 12, sm: 5.5 }}>
        <Typography id="amount-label" sx={{ ...inputLabelStyles }}>
          To
        </Typography>
        <CurrencySelector
          currencyCode={toCurrencyCode}
          onCurrencyCodeChange={changeToCurrencyCodeHandler}
        />
      </Grid>
    </>
  );
};

export default CurrencySelectionBlock;
