import { currencyRatesStateType } from "../ts-types";

import { currencyRatesActionTypesEnum } from "../constants/redux-constants";

const initialState: currencyRatesStateType = {
  currencyRates: null,
  lastUpdateDateUTC: "",
  isFetching: false,
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case currencyRatesActionTypesEnum.setCurrencyRates:
      return {
        ...state,
        currencyRates: payload.currencyRates,
        lastUpdateDateUTC: payload.date,
        isFetching: false,
      };
    case currencyRatesActionTypesEnum.setCurrencyRatesFetchingStatus:
      return { ...state, isFetching: payload };
    default:
      return state;
  }
};

export default reducer;
