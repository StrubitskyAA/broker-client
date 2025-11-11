import { Box, IconButton, InputBase, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import _ from "lodash";

import { currencyListType } from "../../../../ts-types";

import searchIcon from "../../../../icons/search-icon.svg";
import { searchDelayTime } from "../../../../constants/time-constants";

import useDebounce from "../../../../hooks/useDebounce";
import { groupListByCode } from "../../../../helpers/general-helpers";

import { infoTextStyles } from "../../../../styles/text-styles";
import {
  searchButtonStyles,
  searchStyles,
} from "../../../../styles/elements-styles";

const CurrencySearchFilter: FC<{
  setSearchText: Dispatch<SetStateAction<string>>;
  searchText: string;
  currencyList: currencyListType;
  setCurrencyFilteredList: Dispatch<SetStateAction<currencyListType>>;
}> = ({ searchText, setSearchText, currencyList, setCurrencyFilteredList }) => {
  const searchTextChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearchText(value);
    },
    [setSearchText]
  );

  const debouncedSearchText = useDebounce(searchText, searchDelayTime);
  const filterCurencyListHandler = useCallback(
    (text: string) => {
      setCurrencyFilteredList(
        groupListByCode(
          Object.values(currencyList).filter(
            (curencyInfo) =>
              _.toLower(curencyInfo.name).includes(_.toLower(text)) ||
              _.toLower(curencyInfo.code).includes(_.toLower(text))
          )
        )
      );
    },
    [currencyList, setCurrencyFilteredList]
  );

  useEffect(() => {
    filterCurencyListHandler(debouncedSearchText || "");
  }, [debouncedSearchText, filterCurencyListHandler]);

  return (
    <>
      <Typography sx={{ ...infoTextStyles, lineHeight: "16px" }}>
        Choose a currency from the list below or use the search bar to find a
        specific currency.
      </Typography>
      <Box component="form" sx={searchStyles}>
        <IconButton sx={searchButtonStyles} aria-label="menu">
          <img src={searchIcon} alt="searchIcon" />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type currency mame or code"
          inputProps={{ "aria-label": "Type currency mame or code" }}
          value={searchText}
          onChange={searchTextChangeHandler}
        />
      </Box>
    </>
  );
};

export default CurrencySearchFilter;
