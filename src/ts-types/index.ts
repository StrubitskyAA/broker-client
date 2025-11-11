import { alertColorsEnum } from "../constants/colors";

export type currencyControlType = {
  currencyFromCode: string;
  setCurrencyFromCode: (code: string) => void;
  currencyToCode: string;
  setCurrencyToCode: (Ccde: string) => void;
};

export type amountInputType = {
  amount: string;
  onAmountChange: (value: string) => void;
};

export type currencyListType = { [code: string]: currencyInfoType };

export type currencyInfoType = {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
  countryCodeISO2: string;
  flagSrc: string;
};

export type currencyRatesType = { [currencyCode: string]: number };

export interface infoInterface {
  infoText: string;
  infoType: alertColorsEnum;
}

export type dateStorageType = {
  rates: currencyRatesType;
  date: string;
};

export type preferencesStorageType = {
  codeFrom: string;
  codeTo: string;
  amount: string;
};

export type setPreferencesStorageType = {
  indexFrom: number;
  indexTo: number;
};
