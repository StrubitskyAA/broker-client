import { Chip, SxProps } from "@mui/material";
import { FC } from "react";

import colors from "../../../constants/colors";

import onlineIcon from "../../../icons/wifi-on-icon.svg";

import { indicatorContainerStyles } from "../../../styles/elements-styles";

const OnlineIndicator: FC<{ sx?: SxProps }> = ({ sx = {} }) => (
  <Chip
    sx={{
      ...indicatorContainerStyles,
      ...sx,
      backgroundColor: colors.green25,
      borderColor: colors.green200,
      color: colors.green600,
    }}
    icon={<img src={onlineIcon} alt="onlineIcon" />}
    label="Online"
  />
);

export default OnlineIndicator;
