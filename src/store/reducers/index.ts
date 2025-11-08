import { combineReducers } from "redux";

import connectionReducer from "./connection-reducer";
import currencyRatesReducer from "./currency-rates-reducer";
import infoMessageReducer from "./info-reducer";

const reducers = combineReducers({
  connection: connectionReducer,
  currencyRates: currencyRatesReducer,
  info: infoMessageReducer,
});

export default reducers;
