import { FC, useEffect, createContext, useState } from "react";
import { Box } from "@mui/material";

import {
  currencyRatesSelector,
  connectionStatusSelector,
} from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import {
  checkConnectionAction,
  fetchCurrencyRatesAction,
} from "../../store/actions/redux-actions";
import { useOnce } from "../../hooks/useOnce";

import { currencyListType } from "../../ts-types";

import { contertCurrencyList } from "../../helpers/general-helpers";

import Header from "./header/header";
import Wrapper from "./conversion-wrapper/wrapper";

import {
  flexCentered,
  flexColStyles,
  flexFullStyles,
} from "../../styles/flex-styles";

export const CurrencyListContext = createContext(contertCurrencyList());

const App: FC = () => {
  const curencyRates = useAppSelector(currencyRatesSelector);
  const [filteredList, setFilteredList] = useState<currencyListType>(
    contertCurrencyList()
  );
  const hasConnection = useAppSelector(connectionStatusSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (hasConnection) dispatch(fetchCurrencyRatesAction(hasConnection));
    // eslint-disable-next-line
  }, [hasConnection]);

  useOnce(() => {
    dispatch(checkConnectionAction());
  }, true);

  useOnce(() => {
    setFilteredList(contertCurrencyList(curencyRates));
  }, !!curencyRates);

  return (
    <Box
      sx={{
        ...flexFullStyles,
        ...flexCentered,
        ...flexColStyles,
        minHeight: "100vh",
      }}
    >
      <Header />
      <CurrencyListContext value={filteredList}>
        <Wrapper />
      </CurrencyListContext>
    </Box>
  );
};

export default App;
