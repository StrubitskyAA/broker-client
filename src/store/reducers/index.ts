import { combineReducers } from "redux";

import infoMessageSlice from "./info-reducer";
import connectionSlice from "./connection-reducer";
import currencyRatesApi from "../../services/currency-retes-api";
import currencySlice from "./currency-reducer";

const reducers = combineReducers({
  [currencyRatesApi.reducerPath]: currencyRatesApi.reducer,
  [currencySlice.reducerPath]: currencySlice.reducer,
  [infoMessageSlice.reducerPath]: infoMessageSlice.reducer,
  [connectionSlice.reducerPath]: connectionSlice.reducer,
});

export default reducers;
