import { Box, Grid } from "@mui/material";
import { createContext, FC, useState } from "react";
import _ from "lodash";

import { currencyListType } from "../../../ts-types";

import { convertCurrencyList } from "../../../helpers/general-helpers";
import { useGetRatesQuery } from "../../../services/currency-retes-api";
import { useOnce } from "../../../hooks/useOnce";

import ControlWrapper from "../conversion-control";
import ResultWrapper from "../conversion-result";

import { flexCentered } from "../../../styles/flex-styles";

export const CurrencyListContext = createContext(convertCurrencyList());

const Wrapper: FC = () => {
  const { data } = useGetRatesQuery();
  const [filteredList, setFilteredList] = useState<currencyListType>(
    convertCurrencyList(),
  );

  useOnce(() => {
    setFilteredList(convertCurrencyList(data?.rates));
  }, !_.isEmpty(data?.rates));

  return (
    <CurrencyListContext value={filteredList}>
      <Box sx={{ ...flexCentered }}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "1020px", width: "100%", p: "20px" }}
        >
          <Grid size={{ xs: 12, sm: 8 }}>
            <ControlWrapper />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <ResultWrapper />
          </Grid>
        </Grid>
      </Box>
    </CurrencyListContext>
  );
};

export default Wrapper;
