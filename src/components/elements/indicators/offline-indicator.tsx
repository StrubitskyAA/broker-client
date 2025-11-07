import { Chip, SxProps } from "@mui/material";
import { FC } from "react";

import offlineIcon from "../../../icons/wifi-off-icon.svg";

import colors from "../../../constants/colors";

import { indicatorContainerStyles } from "../../../styles/elements-styles";

const OfflineIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) => (
  <Chip
    sx={{
      ...indicatorContainerStyles,
      ...sx,
      backgroundColor: colors.red25,
      borderColor: colors.red200,
      color: colors.red600,
    }}
    icon={<img src={offlineIcon} alt="offlineIcon" />}
    label="Offline"
  />
);

export default OfflineIndicator;
