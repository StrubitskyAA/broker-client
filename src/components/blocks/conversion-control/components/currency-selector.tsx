import { List } from "@mui/material";
import { FC, useCallback, useState } from "react";

import currencyList from "../../../../constants/currencies.json";

import CurrencyListModal from "../../../elements/modals/currency-list-modal";
import CurrencyItemButton from "../../../elements/buttons/currency-item-button";

import { selectorStyles } from "../../../../styles/elements-styles";

const CurrencySelector: FC<{
  currencyIndex: number;
  onCurrencyIndexChange: (index: number) => void;
}> = ({ currencyIndex, onCurrencyIndexChange }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const selectorCloseHandler = useCallback(
    () => setIsSelectorOpen(false),
    [setIsSelectorOpen]
  );
  const selectorOpenHandler = useCallback(
    (index?: number) => setIsSelectorOpen(true),
    [setIsSelectorOpen]
  );

  return (
    <>
      <CurrencyListModal
        index={currencyIndex}
        isOpen={isSelectorOpen}
        onChange={onCurrencyIndexChange}
        onClose={selectorCloseHandler}
      />
      <List component="nav" sx={selectorStyles}>
        <CurrencyItemButton
          currencyInfo={currencyList[currencyIndex]}
          index={currencyIndex}
          onClick={selectorOpenHandler}
        />
      </List>
    </>
  );
};

export default CurrencySelector;
