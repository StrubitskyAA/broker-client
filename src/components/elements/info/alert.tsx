import { Alert, Snackbar, Typography } from "@mui/material";
import { FC, memo, useCallback } from "react";
import _ from "lodash";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { infoSelector } from "../../../store/selectors";
import { resetInfoMessare } from "../../../store/reducers/info-reducer";

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
  const dispatch = useAppDispatch();
  const { infoText, infoType } = useAppSelector(infoSelector);

  const clearInfoHandler = useCallback(() => {
    dispatch(resetInfoMessare());
  }, [dispatch]);

  return (
    <Snackbar
      open={_.isBoolean(isOpen) ? isOpen : !!infoText}
      autoHideDuration={infoAutoCloseTimeout}
      onClose={onClose ? onClose : clearInfoHandler}
    >
      <Alert
        severity={infoType}
        variant={fillVariantsEnum.filled}
        sx={flexItemCentered}
        action={<CloseButton onClose={onClose ? onClose : clearInfoHandler} />}
      >
        <Typography variant="h6" color="inherit">
          {text || infoText}
        </Typography>
      </Alert>
    </Snackbar>
  );
});

export default InfoAlert;
