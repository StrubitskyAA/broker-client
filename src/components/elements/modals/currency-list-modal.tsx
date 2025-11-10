import { Box, Modal, Typography } from "@mui/material";
import { FC, useCallback, useContext, useRef, useState } from "react";

import { currencyInfoType } from "../../../ts-types";

import { getCurrencyIndexAdapter } from "./helpers/conversion-helpers";

import CloseButton from "../buttons/close-button";
import { CurrencyListContext } from "../../blocks/app";
import CurrensySearchFilter from "./currency-list-components/currency-search";
import CurrencyList from "./currency-list-components/currency-list";

import { modalBodyStyles, modalStyles } from "./styles/modal-styles";
import {
  flexItemCentered,
  flexSpaceBetween,
} from "../../../styles/flex-styles";

const CurrencyListModal: FC<{
  index: number;
  isOpen: boolean;
  onChange: (index: number) => void;
  onClose: () => void;
}> = ({ index, isOpen, onChange, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrolContainerRef = useRef<HTMLDivElement | null>(null);
  const currencyList = useContext(CurrencyListContext);
  const [searchText, setSearchText] = useState<string>("");
  const [currencyFilteredList, setCurrencyFilteredList] =
    useState<currencyInfoType[]>(currencyList);
  const [adaptedCurrencyIndex, setAdaptedCurrencyIndex] = useState<number>(
    getCurrencyIndexAdapter(currencyList, currencyList, index, true)
  );

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

  return (
    <Modal open={isOpen} onClose={onClose} ref={modalRef}>
      <Box sx={modalStyles}>
        <Box sx={{ ...flexItemCentered, ...flexSpaceBetween }}>
          <Typography>Select currency</Typography>
          <CloseButton onClose={onClose} />
        </Box>
        <CurrensySearchFilter
          searchText={searchText}
          setSearchText={setSearchText}
          currencyList={currencyList}
          setAdaptedCurrencyIndex={setAdaptedCurrencyIndex}
          index={index}
          setCurrencyFilteredList={setCurrencyFilteredList}
        />
        <Box sx={modalBodyStyles} ref={scrolContainerRef}>
          <CurrencyList
            currencyList={currencyFilteredList}
            onSelect={currencyItemSelectHandler}
            selectedIndex={adaptedCurrencyIndex}
            modalRef={modalRef}
            scrolContainerRef={scrolContainerRef}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default CurrencyListModal;
