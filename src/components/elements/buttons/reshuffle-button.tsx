import { IconButton } from "@mui/material";
import { FC, useCallback } from "react";

import vectorIcon from "../../../icons/vector.svg";

const ReshuffleButton: FC<{
  values: [string, string];
  setValuesArray: [(code: string) => void, (code: string) => void];
}> = ({ values, setValuesArray }) => {
  const reshuffleHandler = useCallback(() => {
    if (!!setValuesArray[0] && !!setValuesArray[1]) {
      setValuesArray[0](values[1]);
      setValuesArray[1](values[0]);
    }
  }, [values, setValuesArray]);

  return (
    <IconButton aria-label="delete" size="large" onClick={reshuffleHandler}>
      <img src={vectorIcon} alt="vectorIcon" />
    </IconButton>
  );
};

export default ReshuffleButton;
