import { Alert, Snackbar, Typography } from "@mui/material";
import { FC } from "react";
import _ from "lodash";

import { getInfoMessageSelector } from "../../../store/selectors";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/redux-hooks";
import { clearInfoMessageAction } from "../../../store/actions/redux-actions";

import { infoInterface } from "../../../ts-types";

import { infoAutoCloseTimeout } from "../../../constants/time-constants";
import { fillVariantsEnum } from "../../../constants/colors";

// import CloseButton from "../buttons/close-button";

import { flexItemCentered } from "../../../styles/flex-styles";

const InfoAlert: FC<{
  text?: string;
  isOpen?: boolean;
  onClose?: () => void;
}> = ({ text, isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const { infoText, infoType }: infoInterface = useAppSelector(
    getInfoMessageSelector
  );

  return (
    <Snackbar
      open={_.isBoolean(isOpen) ? isOpen : !!infoText}
      autoHideDuration={infoAutoCloseTimeout}
      onClose={onClose ? onClose : () => dispatch(clearInfoMessageAction())}
    >
      <Alert
        severity={infoType}
        variant={fillVariantsEnum.filled}
        sx={flexItemCentered}
        // action={
        //   <CloseButton
        //     onClose={
        //       onClose ? onClose : () => dispatch(clearInfoMessageAction())
        //     }
        //   />
        // }
      >
        <Typography variant="h6" color="inherit">
          {text || infoText}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default InfoAlert;
