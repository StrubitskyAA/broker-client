import { FC } from "react";
import { Box } from "@mui/material";

import useConnectionStatus from "../../hooks/useConnection";

import InfoAlert from "../elements/info/alert";
import Header from "./header/header";
import ConversionWrapper from "./conversion-wrapper/wrapper";

import {
  flexCentered,
  flexColStyles,
  flexFullStyles,
} from "../../styles/flex-styles";

const App: FC = () => {
  useConnectionStatus();

  return (
    <>
      <InfoAlert />
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
    </>
  );
};

export default App;
