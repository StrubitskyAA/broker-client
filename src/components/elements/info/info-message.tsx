import { Box, SxProps, Typography } from "@mui/material";
import { FC } from "react";
import { flexCentered, flexFullStyles } from "../../../styles/flex-styles";

const InfoMessage: FC<{ label: string; sx?: SxProps }> = ({
  label,
  sx = {},
}) => (
  <Box sx={{ ...flexCentered, ...flexFullStyles, ...sx }}>
    <Typography>{label}</Typography>
  </Box>
);

export default InfoMessage;
