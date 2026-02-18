import { SxProps } from "@mui/material";
import { FC } from "react";

import { connectionSelector } from "../../../store/selectors";

import { useAppSelector } from "../../../hooks/redux-hooks";

import OnlineIndicator from "./online-indicator";
import OfflineIndicator from "./offline-indicator";

const ConnectionStateIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  const { hasConnection } = useAppSelector(connectionSelector);

  return hasConnection ? (
    <OnlineIndicator sx={sx} />
  ) : (
    <OfflineIndicator sx={sx} />
  );
};

export default ConnectionStateIndicator;
