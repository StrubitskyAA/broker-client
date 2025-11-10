import { Box, Grid } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";

import { userPreferenciesStorageKey } from "../../../constants/general-constants";

import { setToStorage } from "../conversion-result/helpers";
import { getCodeFromStorage } from "./helpers/wrapper-helpers";

import ControlWrapper from "../conversion-control/control-wrapper";
import ResultWrapper from "../conversion-result/result-wrapper";

import { flexFullStyles, flexCentered } from "../../../styles/flex-styles";

const Wrapper: FC = () => {
  const [currencyFromCode, setCurrencyFromCode] = useState<string>(
    getCodeFromStorage("codeFrom", "USD")
  );
  const [currencyToCode, setCurrencyToCode] = useState<string>(
    getCodeFromStorage("codeTo", "EUR")
  );
  const [amount, setAmount] = useState<string>("1");

  const amountChangeHandler = useCallback(
    (value: string) => setAmount(value),
    [setAmount]
  );

  useEffect(() => {
    setToStorage(userPreferenciesStorageKey, {
      codeFrom: currencyFromCode,
      codeTo: currencyToCode,
    });
  }, [currencyFromCode, currencyToCode]);

  return (
    <Box sx={{ ...flexFullStyles, ...flexCentered }}>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1020px", width: "100%", p: "20px" }}
      >
        <Grid size={{ xs: 12, sm: 8 }}>
          <ControlWrapper
            currencyFromCode={currencyFromCode}
            setCurrencyFromCode={setCurrencyFromCode}
            currencyToCode={currencyToCode}
            setCurrencyToCode={setCurrencyToCode}
            onAmountChange={amountChangeHandler}
            amount={amount}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <ResultWrapper
            currencyFromCode={currencyFromCode}
            currencyToCode={currencyToCode}
            amount={amount}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wrapper;
