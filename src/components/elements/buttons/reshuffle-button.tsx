import { IconButton } from "@mui/material";
import { FC, useCallback } from "react";

import { swapCurrencyCodes } from "../../../store/reducers/currency-reducer";
import { useAppDispatch } from "../../../hooks/redux-hooks";

import vectorIcon from "../../../icons/vector.svg";

const ReshuffleButton: FC = () => {
  const dispatch = useAppDispatch();
  const swapCodesHandler = useCallback(() => {
    dispatch(swapCurrencyCodes());
  }, [dispatch, swapCurrencyCodes]);

  return (
    <IconButton aria-label="delete" size="large" onClick={swapCodesHandler}>
      <img src={vectorIcon} alt="vectorIcon" />
    </IconButton>
  );
};

export default ReshuffleButton;
