import { SxProps } from "@mui/material";
import { FC } from "react";

import { getConnectionStatusSelector } from "../../../store/selectors";

import { useAppSelector } from "../../../store/hooks/redux-hooks";

import OnlineIndicator from "./online-indicator";
import OfflineIndicator from "./offline-indicator";

const ConnectionStateIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  const hasConnection = useAppSelector(getConnectionStatusSelector);

  return hasConnection ? (
    <OnlineIndicator sx={sx} />
  ) : (
    <OfflineIndicator sx={sx} />
  );
};

export default ConnectionStateIndicator;
