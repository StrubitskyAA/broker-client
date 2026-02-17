import _ from "lodash";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  amountDefaultValue,
  amountStorageKey,
  fromCurrencyCodeStorageKey,
  fromCurrencyDefaultCode,
  toCurrencyCodeStorageKey,
  toCurrencyDefaultCode,
} from "../../constants/general-constants";

import {
  getFromStorage,
  setToStorage,
} from "../../components/blocks/conversion-result/helpers";

interface ICurrencyState {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  lastUpdateDateUTC: string;
  amount: string;
}

const initialState: ICurrencyState = {
  fromCurrencyCode: getFromStorage(fromCurrencyCodeStorageKey)
    ? _.toString(getFromStorage(fromCurrencyCodeStorageKey))
    : fromCurrencyDefaultCode,
  toCurrencyCode: getFromStorage(toCurrencyCodeStorageKey)
    ? _.toString(getFromStorage(toCurrencyCodeStorageKey))
    : toCurrencyDefaultCode,
  lastUpdateDateUTC: "",
  amount: getFromStorage(amountStorageKey)
    ? _.toString(getFromStorage(amountStorageKey))
    : amountDefaultValue,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setToCurrencyCode: (state, action: PayloadAction<string>) => {
      setToStorage(toCurrencyCodeStorageKey, action.payload);
      state.toCurrencyCode = action.payload;
    },
    setFromCurrencyCode: (state, action: PayloadAction<string>) => {
      setToStorage(fromCurrencyCodeStorageKey, action.payload);
      state.fromCurrencyCode = action.payload;
    },
    swapCurrencyCodes: (state) => {
      setToStorage(toCurrencyCodeStorageKey, state.fromCurrencyCode);
      setToStorage(fromCurrencyCodeStorageKey, state.toCurrencyCode);
      const prevFromValue = state.fromCurrencyCode;
      state.fromCurrencyCode = state.toCurrencyCode;
      state.toCurrencyCode = prevFromValue;
    },
    setUpdateTime: (state, action: PayloadAction<string>) => {
      state.lastUpdateDateUTC = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      setToStorage(amountStorageKey, action.payload);
      state.amount = action.payload;
    },
  },
});

export const {
  setToCurrencyCode,
  setFromCurrencyCode,
  setUpdateTime,
  swapCurrencyCodes,
  setAmount,
} = currencySlice.actions;
export default currencySlice;
