import { alertColorsEnum } from "../constants/colors";

export type currencyListType = { [code: string]: currencyInfoType };

export interface IRatesResponse {
  base: string;
  date: string;
  rates: ICurrencyRates;
}

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

export interface ICurrencyRates {
  [currencyCode: string]: number;
}

export interface IInfo {
  infoText: string;
  infoType: alertColorsEnum;
}

export interface infoContextInterface {
  info: IInfo;
  setInfo: (value: IInfo) => void;
}
export interface connectionInterface {
  hasConnection: boolean;
}

export type dateStorageType = {
  rates: ICurrencyRates;
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
