import { combineReducers } from "redux";

import currencyRatesReducer from "./currency-rates-reducer";
import infoMessageReducer from "./info-reducer";

const reducers = combineReducers({
  currencyRates: currencyRatesReducer,
  info: infoMessageReducer,
});

export default reducers;
