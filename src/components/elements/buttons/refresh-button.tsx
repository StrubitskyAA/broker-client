import { Chip, SxProps } from "@mui/material";
import { FC } from "react";

import colors from "../../../constants/colors";

import refreshIcon from "../../../icons/material-symbols_refresh-rounded.svg";

import { indicatorContainerStyles } from "../../../styles/elements-styles";

interface IRefetchProps {
  onClick: () => void;
  sx?: SxProps;
  disabled: boolean;
}

const RefreshButton: FC<IRefetchProps> = ({ onClick, sx = {}, disabled }) => (
  <Chip
    icon={<img src={refreshIcon} alt="refreshIcon" />}
    label="Refresh rates"
    onClick={disabled ? () => false : onClick}
    sx={{
      ...indicatorContainerStyles,
      ...sx,
      backgroundColor: colors.blue25,
      borderColor: colors.blue200,
      color: colors.blue600,
    }}
  />
);

export default RefreshButton;
