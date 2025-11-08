import { SxProps } from "@mui/material";
import { FC } from "react";

import OnlineIndicator from "./online-indicator";
import OfflineIndicator from "./offline-indicator";

const ConnectionStateIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) =>
  navigator.onLine ? <OnlineIndicator sx={sx} /> : <OfflineIndicator sx={sx} />;

export default ConnectionStateIndicator;
