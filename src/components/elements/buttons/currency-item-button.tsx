import { Avatar, ListItemButton, ListItemText } from "@mui/material";
import { FC, memo, useCallback } from "react";

import { currencyInfoType } from "../../../ts-types";

import checkItem from "../../../icons/check-rounded.svg";

import { checkIsEqualCurrencyButtonProps } from "../../blocks/conversion-result/helpers/memoization";

import { currencyAvatarStyles } from "../../../styles/elements-styles";

export type currencyItemButtonPropsType = {
  currencyInfo: currencyInfoType;
  onClick: (code: string) => void;
  code: string;
  index?: number;
  isSelected?: boolean;
  isHovered?: boolean;
};

const CurrencyItemButton: FC<currencyItemButtonPropsType> = memo(
  function Inner({
    currencyInfo,
    onClick,
    code,
    index,
    isSelected,
    isHovered,
  }) {
    const buttonClickHandler = useCallback(() => {
      onClick(code);
    }, [onClick, code]);

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
  checkIsEqualCurrencyButtonProps
);

export default CurrencyItemButton;
