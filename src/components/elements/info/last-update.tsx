import { Box, SxProps } from "@mui/material";
import { FC } from "react";

import clockIcon from "../../../icons/clock-icon.svg";

import { flexItemCentered } from "../../../styles/flex-styles";
import { infoTextStyles } from "../../../styles/text-styles";

const LastUpdate: FC<{ date: string; sx?: SxProps }> = ({ date, sx = {} }) => {
  return (
    <Box sx={{ ...flexItemCentered, ...sx, ...infoTextStyles }}>
      <Box sx={{ mr: "4px", ...flexItemCentered }}>
        <img src={clockIcon} alt="clockIcon" />
      </Box>
      Last updated: {date}
    </Box>
  );
};

export default LastUpdate;
