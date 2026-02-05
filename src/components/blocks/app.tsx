import { FC } from "react";
import { Box } from "@mui/material";
import _ from "lodash";

import Header from "./header/header";
import ConversionWrapper from "./conversion-wrapper/wrapper";
import InfoProvider from "./info-provider";

import {
  flexCentered,
  flexColStyles,
  flexFullStyles,
} from "../../styles/flex-styles";
import useConnectionStatus from "../../hooks/useConnection";

const App: FC = () => {
  useConnectionStatus();

  return (
    <InfoProvider>
      <Box
        sx={{
          ...flexFullStyles,
          ...flexCentered,
          ...flexColStyles,
          minHeight: "100vh",
        }}
      >
        <Header />
        <ConversionWrapper />
      </Box>
    </InfoProvider>
  );
};

export default App;
