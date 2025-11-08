import { FC, useEffect, createContext, useState } from "react";

import { currencyRatesSelector } from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import { fetchCurrencyRatesAction } from "../../store/actions/redux-actions";
import { useOnce } from "../../hooks/useOnce";

import { currencyInfoType } from "../../ts-types";

import currencyList from "../../constants/currencies.json";

import { updateData } from "../../helpers/general-helpers";

import Header from "./header/header";
import Wrapper from "./conversion-wrapper/wrapper";

export const CurrencyListContext = createContext(currencyList);

const App: FC<{ hasConnection: boolean }> = ({ hasConnection }) => {
  const curencyRates = useAppSelector(currencyRatesSelector);
  const [filteredList, setFilteredList] =
    useState<currencyInfoType[]>(currencyList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrencyRatesAction(hasConnection));
    // eslint-disable-next-line
  }, [hasConnection]);

  useOnce(() => {
    updateData(dispatch);
  }, true);

  useOnce(() => {
    setFilteredList(
      currencyList.filter((currencyInfo) => !!curencyRates[currencyInfo.code])
    );
  }, !!curencyRates);

  return (
    <>
      <Header />
      <CurrencyListContext value={filteredList}>
        <Wrapper />
      </CurrencyListContext>
    </>
  );
};

export default App;
