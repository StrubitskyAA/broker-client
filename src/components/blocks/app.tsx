import { FC, useEffect } from "react";

import { useOnce } from "../../store/hooks/useOnce";
import { useAppDispatch } from "../../store/hooks/redux-hooks";
import { fetchCurrencyRatesAction } from "../../store/actions/redux-actions";

import { updateData } from "../../helpers/general-helpers";

import Header from "./header/header";
import Wrapper from "./conversion-wrapper/wrapper";

const App: FC<{ hasConnection: boolean }> = ({ hasConnection }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrencyRatesAction(hasConnection));
    // eslint-disable-next-line
  }, [hasConnection]);

  useOnce(() => {
    updateData(dispatch);
  }, true);

  return (
    <>
      <Header />
      <Wrapper />
    </>
  );
};

export default App;
