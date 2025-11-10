import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC, useCallback } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/redux-hooks";
import { lastUpdateDateSelector } from "../../../store/selectors";
import { fetchCurrencyRatesAction } from "../../../store/actions/redux-actions";

import { lastUpdateFormat } from "../../../constants/time";
import { breakPointCondition } from "../../../constants/general-constants";

import { convertDateFormat } from "../../../helpers/general-helpers";

import ConnectionStateIndicator from "../../elements/indicators/connection-state-indicator";
import LastUpdate from "../../elements/info/last-update";
import RefreshButton from "../../elements/buttons/refresh-button";

import {
  flexCentered,
  flexColStyles,
  flexRowStyles,
} from "../../../styles/flex-styles";
import { infoTextStyles, titleStyles } from "../../../styles/text-styles";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const lastUpdateDate: string = useAppSelector(lastUpdateDateSelector);
  const matches = useMediaQuery(breakPointCondition);

  const onRefreshClickHandler = useCallback(() => {
    dispatch(fetchCurrencyRatesAction(true));
  }, [dispatch]);

  return (
    <Box sx={{ textAlign: "center", mb: 3 }}>
      <Typography variant="h4" sx={titleStyles}>
        Currency converter
      </Typography>
      <Typography variant="body1" sx={infoTextStyles}>
        Get real time exchange rates
      </Typography>
      <Box
        sx={{
          ...flexCentered,
          ...(matches ? flexRowStyles : flexColStyles),
          mt: 1,
        }}
      >
        <ConnectionStateIndicator sx={{ m: "4px 0" }} />
        <LastUpdate
          sx={{ m: "4px 8px" }}
          date={convertDateFormat(lastUpdateDate, lastUpdateFormat)}
        />
        <RefreshButton sx={{ m: "4px 8px" }} onClick={onRefreshClickHandler} />
      </Box>
    </Box>
  );
};

export default Header;
