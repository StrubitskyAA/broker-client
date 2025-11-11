import { combineReducers } from "redux";

import currencyRatesReducer from "./currency-rates-reducer";
import infoMessageReducer from "./info-reducer";
import connectionReducer from "./connection-reducer";

const reducers = combineReducers({
  currencyRates: currencyRatesReducer,
  info: infoMessageReducer,
  connection: connectionReducer,
});

export default reducers;
