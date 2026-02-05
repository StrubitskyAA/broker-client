import { Alert, Snackbar, Typography } from "@mui/material";
import { FC, memo, useContext } from "react";
import _ from "lodash";

import infoContext, {
  initialInfoState,
} from "../../../store/context/info-context";

import { infoAutoCloseTimeout } from "../../../constants/time-constants";
import { fillVariantsEnum } from "../../../constants/colors";

// import CloseButton from "../buttons/close-button";
import CloseButton from "../buttons/close-button";

import { flexItemCentered } from "../../../styles/flex-styles";

const InfoAlert: FC<{
  text?: string;
  isOpen?: boolean;
  onClose?: () => void;
}> = memo(({ text, isOpen, onClose }) => {
  const {
    info: { infoText, infoType },
    setInfo,
  } = useContext(infoContext);

  return (
    <Snackbar
      open={_.isBoolean(isOpen) ? isOpen : !!infoText}
      autoHideDuration={infoAutoCloseTimeout}
      onClose={onClose ? onClose : () => setInfo(initialInfoState)}
    >
      <Alert
        severity={infoType}
        variant={fillVariantsEnum.filled}
        sx={flexItemCentered}
        action={
          <CloseButton
            onClose={onClose ? onClose : () => setInfo(initialInfoState)}
          />
        }
      >
        <Typography variant="h6" color="inherit">
          {text || infoText}
        </Typography>
      </Alert>
    </Snackbar>
  );
});

export default InfoAlert;
