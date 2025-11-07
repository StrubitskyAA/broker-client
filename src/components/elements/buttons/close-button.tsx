import { IconButton } from "@mui/material";
import { FC } from "react";

import closeIcon from "../../../icons/x-mark-icon.svg";

const CloseButton: FC<{
  onClose: () => void;
}> = ({ onClose }) => (
  <IconButton size="large" onClick={onClose}>
    <img src={closeIcon} alt="closeIcon" />
  </IconButton>
);

export default CloseButton;
