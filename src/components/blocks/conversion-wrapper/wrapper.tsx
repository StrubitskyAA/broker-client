import { Box, Grid } from "@mui/material";
import { FC, useCallback, useState } from "react";

import ControlWrapper from "../conversion-control/control-wrapper";
import ResultWrapper from "../conversion-result/result-wrapper";

import { flexFullStyles, flexCentered } from "../../../styles/flex-styles";

const Wrapper: FC = () => {
  const [currencyFromIndex, setCurrencyFromIndex] = useState<number>(0);
  const [currencyToIndex, setCurrencyToIndex] = useState<number>(1);
  const [amount, setAmount] = useState<string>("0");

  const amountChangeHandler = useCallback(
    (value: string) => setAmount(value),
    [setAmount]
  );

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
