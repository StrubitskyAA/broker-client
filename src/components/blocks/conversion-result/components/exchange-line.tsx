import { Box, Typography } from "@mui/material";
import { FC } from "react";

import {
  flexItemCentered,
  flexRowStyles,
  flexSpaceBetween,
} from "../../../../styles/flex-styles";
import { rateLabelStyles, rateTextStyles } from "../styles";

const ExchangeLine: FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <Box sx={{ ...flexRowStyles, ...flexItemCentered, ...flexSpaceBetween }}>
    <Typography sx={rateLabelStyles}>{label}</Typography>
    <Typography sx={rateTextStyles}>{value}</Typography>
  </Box>
);

export default ExchangeLine;
