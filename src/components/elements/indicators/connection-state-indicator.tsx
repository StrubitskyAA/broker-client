import { SxProps } from "@mui/material";
import { FC } from "react";

import OnlineIndicator from "./online-indicator";
import OfflineIndicator from "./offline-indicator";

import { useAppSelector } from "../../../store/hooks/redux-hooks";
import { connectionStatusSelector } from "../../../store/selectors";

const ConnectionStateIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  const hasConnection = useAppSelector(connectionStatusSelector);

  return hasConnection ? (
    <OnlineIndicator sx={sx} />
  ) : (
    <OfflineIndicator sx={sx} />
  );
};

export default ConnectionStateIndicator;
