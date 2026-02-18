import { Box, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import moment from "moment";
import _ from "lodash";

import { setUpdateTime } from "../../../store/reducers/currency-reducer";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { useGetRatesQuery } from "../../../services/currency-retes-api";
import { connectionSelector } from "../../../store/selectors";
import { setInfoMessage } from "../../../store/reducers/info-reducer";

import { lastUpdateFormat } from "../../../constants/time-constants";
import { breakPointCondition } from "../../../constants/general-constants";
import colors, { alertColorsEnum } from "../../../constants/colors";

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
  const lastUpdateDate = useAppSelector(
    (store) => store.currency.lastUpdateDateUTC,
  );
  const { hasConnection } = useAppSelector(connectionSelector);
  const matches = useMediaQuery(breakPointCondition);

  const { refetch, isError, error, status, fulfilledTimeStamp, isFetching } =
    useGetRatesQuery();

  useEffect(() => {
    if (status === "fulfilled" && !isError) {
      dispatch(setUpdateTime(moment(fulfilledTimeStamp).utc().format()));
    }
    if (error) {
      const err = error as FetchBaseQueryError;
      const message =
        typeof err.status !== "number" ? err.error : _.toString(err.data || "");

      dispatch(
        setInfoMessage({
          infoText: (error as SerializedError).message || message || "",
          infoType: alertColorsEnum.error,
        }),
      );
    }
  }, [fulfilledTimeStamp, status, isError, dispatch, error]);

  return (
    <Box sx={{ textAlign: "center", mb: 3 }}>
      <Typography variant="h4" sx={titleStyles}>
        Currency converter
      </Typography>
      <Typography variant="body1" sx={infoTextStyles}>
        Get real time exchange rates
      </Typography>
      {!hasConnection && (
        <Typography
          variant="body1"
          sx={{ ...infoTextStyles, color: colors.warning }}
        >
          Using cached rates from{" "}
          {convertDateFormat(lastUpdateDate, lastUpdateFormat)}
        </Typography>
      )}
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
        <RefreshButton
          sx={{ m: "4px 8px" }}
          onClick={refetch}
          disabled={isFetching}
        />
      </Box>
    </Box>
  );
};

export default Header;
