import { resultValueBlockPropsType } from "../components/result-value";
import { exchangeBlockPropsType } from "../components/exchange-block";
import { currencyItemButtonPropsType } from "../../../elements/buttons/currency-item-button";

export const checkIsEqualExchangeProps = (
  prevProps: exchangeBlockPropsType,
  nextProps: exchangeBlockPropsType
) =>
  prevProps.currencyFromCode === nextProps.currencyFromCode &&
  prevProps.currencyToCode === nextProps.currencyToCode;

export const checkIsEqualResultValuesProps = (
  { amount: prevAmount, ...prevProps }: resultValueBlockPropsType,
  { amount: nextAmount, ...nextProps }: resultValueBlockPropsType
) =>
  checkIsEqualExchangeProps(prevProps, nextProps) && prevAmount === nextAmount;

export const checkIsEqualCurrencyButtonProps = (
  prevProps: currencyItemButtonPropsType,
  nextProps: currencyItemButtonPropsType
) =>
  prevProps.isSelected === nextProps.isSelected &&
  prevProps.isHovered === nextProps.isHovered &&
  prevProps.currencyInfo.code === nextProps.currencyInfo.code &&
  prevProps.code === nextProps.code &&
  prevProps.index === nextProps.index;
