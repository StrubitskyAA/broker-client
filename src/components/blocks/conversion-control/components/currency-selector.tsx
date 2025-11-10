import { List } from "@mui/material";
import { FC, useCallback, useContext, useState } from "react";

import CurrencyListModal from "../../../elements/modals/currency-list-modal";
import CurrencyItemButton from "../../../elements/buttons/currency-item-button";
import { CurrencyListContext } from "../../app";

import { selectorStyles } from "../../../../styles/elements-styles";

const CurrencySelector: FC<{
  currencyCode: string;
  onCurrencyCodeChange: (code: string) => void;
}> = ({ currencyCode, onCurrencyCodeChange }) => {
  const currencyList = useContext(CurrencyListContext);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const selectorCloseHandler = useCallback(
    () => setIsSelectorOpen(false),
    [setIsSelectorOpen]
  );
  const selectorOpenHandler = useCallback(
    (code?: string) => setIsSelectorOpen(true),
    [setIsSelectorOpen]
  );

  return (
    <>
      <CurrencyListModal
        code={currencyCode}
        isOpen={isSelectorOpen}
        onChange={onCurrencyCodeChange}
        onClose={selectorCloseHandler}
      />
      <List component="nav" sx={selectorStyles}>
        <CurrencyItemButton
          currencyInfo={currencyList[currencyCode]}
          code={currencyCode}
          onClick={selectorOpenHandler}
        />
      </List>
    </>
  );
};

export default CurrencySelector;
