import { Box, SxProps } from "@mui/material";
import { FC } from "react";

import clockIcon from "../../../icons/clock-icon.svg";

import { flexItemCentered } from "../../../styles/flex-styles";
import { infoTextStyles } from "../../../styles/text-styles";

const LastUpdate: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  return (
    <Box sx={{ ...flexItemCentered, ...sx, ...infoTextStyles }}>
      <Box sx={{ mr: "4px" }}>
        <img src={clockIcon} alt="clockIcon" />
      </Box>
      Last updated: 09/01/2025, 00:39PM
    </Box>
  );
};

export default LastUpdate;
