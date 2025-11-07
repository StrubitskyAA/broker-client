import { Chip, SxProps } from "@mui/material";
import { FC, useCallback } from "react";

import colors from "../../../constants/colors";

import refreshIcon from "../../../icons/material-symbols_refresh-rounded.svg";

import { indicatorContainerStyles } from "../../../styles/elements-styles";

const RefreshButton: FC<{ sx?: SxProps }> = ({ sx = {} }) => {
  const refreshClickHandle = useCallback(() => {
    console.log("refresh");
  }, []);

  return (
    <Chip
      icon={<img src={refreshIcon} alt="refreshIcon" />}
      label="Refresh rates"
      onClick={refreshClickHandle}
      sx={{
        ...indicatorContainerStyles,
        ...sx,
        backgroundColor: colors.blue25,
        borderColor: colors.blue200,
        color: colors.blue600,
      }}
    />
  );
};

export default RefreshButton;
