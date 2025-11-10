import { Box, Modal, Typography } from "@mui/material";
import { FC, useCallback, useContext, useRef, useState } from "react";

import { currencyListType } from "../../../ts-types";

import CloseButton from "../buttons/close-button";
import { CurrencyListContext } from "../../blocks/app";
import CurrencySearchFilter from "./currency-list-components/currency-search";
import CurrencyList from "./currency-list-components/currency-list";

import { modalBodyStyles, modalStyles } from "./styles/modal-styles";
import {
  flexItemCentered,
  flexSpaceBetween,
} from "../../../styles/flex-styles";

const CurrencyListModal: FC<{
  code: string;
  isOpen: boolean;
  onChange: (code: string) => void;
  onClose: () => void;
}> = ({ code, isOpen, onChange, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrolContainerRef = useRef<HTMLDivElement | null>(null);
  const currencyList = useContext(CurrencyListContext);
  const [searchText, setSearchText] = useState<string>("");
  const [currencyFilteredList, setCurrencyFilteredList] =
    useState<currencyListType>(currencyList);

  const currencyItemSelectHandler = useCallback(
    (newCode: string) => {
      onClose();
      onChange(newCode);
    },
    [onClose, onChange]
  );

  return (
    <Modal open={isOpen} onClose={onClose} ref={modalRef}>
      <Box sx={modalStyles}>
        <Box sx={{ ...flexItemCentered, ...flexSpaceBetween }}>
          <Typography>Select currency</Typography>
          <CloseButton onClose={onClose} />
        </Box>
        <CurrencySearchFilter
          searchText={searchText}
          setSearchText={setSearchText}
          currencyList={currencyList}
          setCurrencyFilteredList={setCurrencyFilteredList}
        />
        <Box sx={modalBodyStyles} ref={scrolContainerRef}>
          <CurrencyList
            currencyList={currencyFilteredList}
            onSelect={currencyItemSelectHandler}
            selectedCode={code}
            modalRef={modalRef}
            scrolContainerRef={scrolContainerRef}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default CurrencyListModal;
