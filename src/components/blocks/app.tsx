import { FC, useEffect, createContext, useState } from "react";

import { currencyRatesSelector } from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux-hooks";
import { fetchCurrencyRatesAction } from "../../store/actions/redux-actions";
import { useOnce } from "../../hooks/useOnce";

import { currencyListType } from "../../ts-types";

import { contertCurrencyList, updateData } from "../../helpers/general-helpers";

import Header from "./header/header";
import Wrapper from "./conversion-wrapper/wrapper";

export const CurrencyListContext = createContext(contertCurrencyList());

const App: FC<{ hasConnection: boolean }> = ({ hasConnection }) => {
  const curencyRates = useAppSelector(currencyRatesSelector);
  const [filteredList, setFilteredList] = useState<currencyListType>(
    contertCurrencyList()
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrencyRatesAction(hasConnection));
    // eslint-disable-next-line
  }, [hasConnection]);

  useOnce(() => {
    updateData(dispatch);
  }, true);

  useOnce(() => {
    setFilteredList(contertCurrencyList(curencyRates));
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
