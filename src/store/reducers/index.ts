import { combineReducers } from "redux";

import infoMessageReducer from "./info-reducer";
import connectionSlice from "./connection-reducer";
import currencyRatesApi from "../../services/currency-retes-api";
import currencySlice from "./currency-reducer";

const reducers = combineReducers({
  [currencyRatesApi.reducerPath]: currencyRatesApi.reducer,
  [currencySlice.reducerPath]: currencySlice.reducer,
  info: infoMessageReducer,
  [connectionSlice.reducerPath]: connectionSlice.reducer,
});

export default reducers;
