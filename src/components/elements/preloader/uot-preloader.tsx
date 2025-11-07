import { Box, CircularProgress } from "@mui/material";
import { SxProps } from "@mui/system";
import { FC } from "react";

import { overlayStyles } from "../../../styles/elements-styles";

const OutPreloader: FC<{ sx?: SxProps; size?: number }> = ({
  sx = {},
  size = 40,
}) => (
  <Box sx={{ ...overlayStyles, ...sx, position: "absolute" }}>
    <CircularProgress size={size} />
  </Box>
);

export default OutPreloader;
