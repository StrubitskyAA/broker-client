import { resultValueBlockPropsType } from "../components/result-value";
import { exchangeBlockPropsType } from "../components/exchange-block";

import currencyList from "../../../../constants/currencies.json";

export const checkIsEqualExchangeProps = (
  prevProps: exchangeBlockPropsType,
  nextProps: exchangeBlockPropsType
) =>
  prevProps.currencyFromIndex === nextProps.currencyFromIndex &&
  prevProps.currencyToIndex === nextProps.currencyToIndex &&
  prevProps.currencyRates[currencyList[prevProps.currencyFromIndex].code] ===
    nextProps.currencyRates[currencyList[nextProps.currencyFromIndex].code] &&
  prevProps.currencyRates[currencyList[prevProps.currencyToIndex].code] ===
    nextProps.currencyRates[currencyList[nextProps.currencyToIndex].code];

export const checkIsEqualResultValuesProps = (
  { amount: prevAmount, ...prevProps }: resultValueBlockPropsType,
  { amount: nextAmount, ...nextProps }: resultValueBlockPropsType
) =>
  checkIsEqualExchangeProps(prevProps, nextProps) && prevAmount === nextAmount;
