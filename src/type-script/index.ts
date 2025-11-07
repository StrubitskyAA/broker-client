export type currensyControlType = {
  currencyFromIndex: number;
  setCurrencyFromIndex: (index: number) => void;
  currencyToIndex: number;
  setCurrencyToIndex: (index: number) => void;
};
export type amountInputType = {
  amount: string;
  onAmountChange: (value: string) => void;
};
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
