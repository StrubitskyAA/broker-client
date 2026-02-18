import { Box, Grid } from "@mui/material";
import { FC } from "react";

import { useAppSelector } from "../../../hooks/redux-hooks";
// import { currencyRateFetchingStatusSelector } from "../../../store/selectors";

import AmountInput from "./components/amount-input";
import CurrencySelectionBlock from "./components/currency-selection-block";
import OutPreloader from "../../elements/preloader/uot-preloader";

import { blockWrapperStyles } from "../../../styles/elements-styles";
import { useGetRatesQuery } from "../../../services/currency-retes-api";

const ControlWrapper: FC = () => {
  const { isLoading } = useGetRatesQuery();

  return (
    <Box sx={blockWrapperStyles}>
      {isLoading && <OutPreloader size={25} />}
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <AmountInput />
        <CurrencySelectionBlock />
      </Grid>
    </Box>
  );
};

export default ControlWrapper;
