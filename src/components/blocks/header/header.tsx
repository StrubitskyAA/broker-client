import { Box, Typography } from "@mui/material";
import { FC } from "react";

import ConnectionStateIndicator from "../../elements/indicators/connection-state-indicator";
import LastUpdate from "../../elements/info/last-update";
import RefreshButton from "../../elements/buttons/refresh-button";

import { flexCentered } from "../../../styles/flex-styles";
import { infoTextStyles, titleStyles } from "../../../styles/text-styles";

const Header: FC = () => (
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="h4" sx={titleStyles}>
      Currency converter
    </Typography>
    <Typography variant="body1" sx={infoTextStyles}>
      Get real time exchange rates
    </Typography>
    <Box sx={{ ...flexCentered }}>
      <ConnectionStateIndicator />
      <LastUpdate sx={{ ml: 1 }} />
      <RefreshButton sx={{ ml: 1 }} />
    </Box>
  </Box>
);

export default Header;
