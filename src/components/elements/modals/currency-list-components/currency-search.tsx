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

import { currencyInfoType } from "../../../../ts-types";

import searchIcon from "../../../../icons/search-icon.svg";
import { searchDelayTime } from "../../../../constants/time";

import { getCurrencyIndexAdapter } from "../helpers/conversion-helpers";
import useDebounce from "../../../../hooks/useDebounce";

import { infoTextStyles } from "../../../../styles/text-styles";

const CurrensySearchFilter: FC<{
  setSearchText: Dispatch<SetStateAction<string>>;
  searchText: string;
  currencyList: currencyInfoType[];
  setAdaptedCurrencyIndex: Dispatch<SetStateAction<number>>;
  index: number;
  setCurrencyFilteredList: Dispatch<SetStateAction<currencyInfoType[]>>;
}> = ({
  searchText,
  setSearchText,
  currencyList,
  setAdaptedCurrencyIndex,
  index,
  setCurrencyFilteredList,
}) => {
  const searchTextChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearchText(value);
    },
    [setSearchText]
  );

  const debouncedSearchText = useDebounce(searchText, searchDelayTime);
  const filterCurencyListHandler = useCallback(
    (text: string) => {
      const newFilteredList = currencyList.filter(
        (curencyInfo) =>
          _.toLower(curencyInfo.name).includes(_.toLower(text)) ||
          _.toLower(curencyInfo.code).includes(_.toLower(text))
      );
      setAdaptedCurrencyIndex(
        getCurrencyIndexAdapter(newFilteredList, currencyList, index, true)
      );
      setCurrencyFilteredList(newFilteredList);
    },
    [index, currencyList, setAdaptedCurrencyIndex, setCurrencyFilteredList]
  );

  useEffect(() => {
    filterCurencyListHandler(debouncedSearchText || "");
  }, [debouncedSearchText, filterCurencyListHandler]);

  return (
    <>
      <Typography sx={infoTextStyles}>
        Choose a currency from the list below or use the search bar to find a
        specific currency.
      </Typography>
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
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

export default CurrensySearchFilter;
