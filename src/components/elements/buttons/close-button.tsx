import { IconButton, SxProps } from "@mui/material";
import { FC } from "react";

import closeIcon from "../../../icons/x-mark-icon.svg";

const CloseButton: FC<{
  onClose: () => void;
  sx?: SxProps;
}> = ({ onClose, sx = {} }) => (
  <IconButton size="large" onClick={onClose} sx={sx}>
    <img src={closeIcon} alt="closeIcon" />
  </IconButton>
);

export default CloseButton;
