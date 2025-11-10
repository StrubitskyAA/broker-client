import { Box, Grid } from "@mui/material";
import { FC, useCallback, useContext, useEffect, useState } from "react";

import { userPreferenciesStorageKey } from "../../../constants/general-constants";

import {
  convertIndexesToCoddes,
  setToStorage,
} from "../conversion-result/helpers";
import { getIndexFromStorage } from "./helpers/wrapper-helpers";

import ControlWrapper from "../conversion-control/control-wrapper";
import ResultWrapper from "../conversion-result/result-wrapper";
import { CurrencyListContext } from "../app";

import { flexFullStyles, flexCentered } from "../../../styles/flex-styles";

const Wrapper: FC = () => {
  const currencyList = useContext(CurrencyListContext);
  const [currencyFromIndex, setCurrencyFromIndex] = useState<number>(
    getIndexFromStorage("codeFrom", currencyList, "USD")
  );
  const [currencyToIndex, setCurrencyToIndex] = useState<number>(
    getIndexFromStorage("codeTo", currencyList, "EUR")
  );
  const [amount, setAmount] = useState<string>("1");

  const amountChangeHandler = useCallback(
    (value: string) => setAmount(value),
    [setAmount]
  );

  useEffect(() => {
    setToStorage(
      userPreferenciesStorageKey,
      convertIndexesToCoddes(
        {
          indexFrom: currencyFromIndex,
          indexTo: currencyToIndex,
        },
        currencyList
      )
    );
    // eslint-disable-next-line
  }, [currencyFromIndex, currencyToIndex, currencyList.length]);

  useEffect(() => {
    setCurrencyFromIndex(getIndexFromStorage("codeFrom", currencyList, "USD"));
    setCurrencyToIndex(getIndexFromStorage("codeTo", currencyList, "EUR"));
    // eslint-disable-next-line
  }, [currencyList.length]);

  return (
    <Box sx={{ ...flexFullStyles, ...flexCentered }}>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1020px", width: "100%", p: "20px" }}
      >
        <Grid size={{ xs: 12, sm: 8 }}>
          <ControlWrapper
            currencyFromIndex={currencyFromIndex}
            setCurrencyFromIndex={setCurrencyFromIndex}
            currencyToIndex={currencyToIndex}
            setCurrencyToIndex={setCurrencyToIndex}
            onAmountChange={amountChangeHandler}
            amount={amount}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ResultWrapper
            currencyFromIndex={currencyFromIndex}
            currencyToIndex={currencyToIndex}
            amount={amount}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wrapper;
