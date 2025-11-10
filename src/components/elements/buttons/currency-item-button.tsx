import { Avatar, ListItemButton, ListItemText, SxProps } from "@mui/material";
import { FC, memo, useCallback } from "react";

import { currencyInfoType } from "../../../ts-types";

import checkItem from "../../../icons/check-rounded.svg";

import { checkIsEqualCurrencyButtonProps } from "../../blocks/conversion-result/helpers/memoization";
import { getCurrencyItemClassNames } from "../modals/helpers/select-curency-item-helpers";

import {
  currencyAvatarStyles,
  currencyButtonStyles,
} from "../../../styles/elements-styles";
import { currencySelectTextStyles } from "../../../styles/text-styles";

export type currencyItemButtonPropsType = {
  currencyInfo: currencyInfoType;
  onClick: (code: string) => void;
  code: string;
  index?: number;
  isSelected?: boolean;
  isHovered?: boolean;
  sx?: SxProps;
};

const CurrencyItemButton: FC<currencyItemButtonPropsType> = memo(
  function Inner({
    currencyInfo,
    onClick,
    code,
    index,
    isSelected,
    isHovered,
    sx = {},
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
        className={getCurrencyItemClassNames({ isSelected, isHovered })}
        sx={{ ...currencyButtonStyles, ...sx }}
      >
        <Avatar sx={currencyAvatarStyles}>{currencyInfo.symbolNative}</Avatar>
        <ListItemText
          primary={currencyInfo.code}
          secondary={currencyInfo.name}
          slotProps={currencySelectTextStyles}
        />
        {isSelected && <img src={checkItem} alt="checkItem" />}
      </ListItemButton>
    );
  },
  checkIsEqualCurrencyButtonProps
);

export default CurrencyItemButton;
