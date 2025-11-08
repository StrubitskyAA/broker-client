import {
  Box,
  IconButton,
  InputBase,
  List,
  Modal,
  Typography,
} from "@mui/material";
import {
  ChangeEvent,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import _ from "lodash";

import { currencyInfoType } from "../../../ts-types";

import searchIcon from "../../../icons/search-icon.svg";
import { searchDelayTime } from "../../../constants/time";

import { getCurrencyIndexAdapter } from "./helpers/conversion-helpers";
import useDebounce from "../../../hooks/useDebounce";

import CloseButton from "../buttons/close-button";
import CurrencyItemButton from "../buttons/currency-item-button";
import { CurrencyListContext } from "../../blocks/app";

import { modalBodyStyles, modalStyles } from "./styles/modal-styles";
import {
  flexItemCentered,
  flexSpaceBetween,
} from "../../../styles/flex-styles";
import { infoTextStyles } from "../../../styles/text-styles";

const CurrencyListModal: FC<{
  index: number;
  isOpen: boolean;
  onChange: (index: number) => void;
  onClose: () => void;
}> = ({ index, isOpen, onChange, onClose }) => {
  const currencyList = useContext(CurrencyListContext);
  const [searchText, setSearchText] = useState<string>("");
  const [currencyFilteredList, setCurrencyFilteredList] =
    useState<currencyInfoType[]>(currencyList);
  const [adaptedCurrencyIndex, setAdaptedCurrencyIndex] = useState<number>(
    getCurrencyIndexAdapter(currencyList, currencyList, index, true)
  );
  const debouncedSearchText = useDebounce(searchText, searchDelayTime);

  const currencyItemSelectHandler = useCallback(
    (filteredListIndex: number) => {
      setAdaptedCurrencyIndex(filteredListIndex);
      const currencyIndex = getCurrencyIndexAdapter(
        currencyFilteredList,
        currencyList,
        filteredListIndex
      );
      onClose();
      onChange(currencyIndex);
    },
    [onClose, onChange, currencyFilteredList, currencyList]
  );
  const searchTextChangeHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearchText(value);
    },
    []
  );
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
    [index, currencyList]
  );

  useEffect(() => {
    filterCurencyListHandler(debouncedSearchText || "");
  }, [debouncedSearchText, filterCurencyListHandler]);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyles}>
        <Box sx={{ ...flexItemCentered, ...flexSpaceBetween }}>
          <Typography>Select currency</Typography>
          <CloseButton onClose={onClose} />
        </Box>
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
        <Box sx={modalBodyStyles}>
          <List>
            {currencyFilteredList.map((currencyInfo, i) => (
              <CurrencyItemButton
                key={currencyInfo.code}
                currencyInfo={currencyFilteredList[i]}
                index={i}
                onClick={currencyItemSelectHandler}
                isSelected={adaptedCurrencyIndex === i}
              />
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default CurrencyListModal;
