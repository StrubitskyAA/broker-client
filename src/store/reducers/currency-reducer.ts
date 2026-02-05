import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fromCurrencyDefaultCode,
  toCurrencyDefaultCode,
} from "../../constants/general-constants";

interface ICurrencyState {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  lastUpdateDateUTC: string;
  amount: string;
}

const initialState: ICurrencyState = {
  fromCurrencyCode: fromCurrencyDefaultCode,
  toCurrencyCode: toCurrencyDefaultCode,
  lastUpdateDateUTC: "",
  amount: "1",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setToCurrencyCode: (state, action: PayloadAction<string>) => {
      state.toCurrencyCode = action.payload;
    },
    setFromCurrencyCode: (state, action: PayloadAction<string>) => {
      state.fromCurrencyCode = action.payload;
    },
    swapCurrencyCodes: (state) => {
      const prevFromValue = state.fromCurrencyCode;
      state.fromCurrencyCode = state.toCurrencyCode;
      state.toCurrencyCode = prevFromValue;
    },
    setUpdateTime: (state, action: PayloadAction<string>) => {
      state.lastUpdateDateUTC = action.payload;
    },
    setAmount: (state, action: PayloadAction<string>) => {
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
