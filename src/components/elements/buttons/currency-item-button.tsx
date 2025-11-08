import { Avatar, ListItemButton, ListItemText } from "@mui/material";
import { FC, useCallback } from "react";

import { currencyInfoType } from "../../../ts-types";

import checkItem from "../../../icons/check-rounded.svg";

import { currencyAvatarStyles } from "../../../styles/elements-styles";

const CurrencyItemButton: FC<{
  currencyInfo: currencyInfoType;
  onClick: (index: number) => void;
  index: number;
  isSelected?: boolean;
}> = ({ currencyInfo, onClick, index, isSelected }) => {
  const buttonClickHandler = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  return (
    <ListItemButton aria-label={currencyInfo.code} onClick={buttonClickHandler}>
      <Avatar sx={currencyAvatarStyles}>{currencyInfo.symbolNative}</Avatar>
      <ListItemText primary={currencyInfo.code} secondary={currencyInfo.name} />
      {isSelected && <img src={checkItem} alt="checkItem" />}
    </ListItemButton>
  );
};

export default CurrencyItemButton;
