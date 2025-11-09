import { Avatar, ListItemButton, ListItemText } from "@mui/material";
import { FC, memo, useCallback } from "react";

import { currencyInfoType } from "../../../ts-types";

import checkItem from "../../../icons/check-rounded.svg";

import { currencyAvatarStyles } from "../../../styles/elements-styles";

type CurrencyItemButtonPropsType = {
  currencyInfo: currencyInfoType;
  onClick: (index: number) => void;
  index: number;
  isSelected?: boolean;
  isHovered?: boolean;
};

const CurrencyItemButton: FC<CurrencyItemButtonPropsType> = memo(
  function Inner({ currencyInfo, onClick, index, isSelected, isHovered }) {
    const buttonClickHandler = useCallback(() => {
      onClick(index);
    }, [onClick, index]);

    return (
      <ListItemButton
        aria-label={currencyInfo.code}
        autoFocus={isSelected}
        onClick={buttonClickHandler}
        data-id={index}
        className={isHovered ? "hovered-list" : ""}
      >
        <Avatar sx={currencyAvatarStyles}>{currencyInfo.symbolNative}</Avatar>
        <ListItemText
          primary={currencyInfo.code}
          secondary={currencyInfo.name}
        />
        {isSelected && <img src={checkItem} alt="checkItem" />}
      </ListItemButton>
    );
  },
  (
    prevProps: CurrencyItemButtonPropsType,
    nextProps: CurrencyItemButtonPropsType
  ) =>
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isHovered === nextProps.isHovered &&
    prevProps.currencyInfo.code === nextProps.currencyInfo.code
);

export default CurrencyItemButton;
